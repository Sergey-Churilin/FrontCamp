'use strict';
//constants
const API_KEY = "f5d0ede14cdc42a990a57ff137f6c5ee";
const arraySources = [
    "abc-news",
    "bbc-sport",
    "bbc-news",
    "cnn",
    "fox-news"
];
const arrayEndpoints = [
    {
        'text' : 'Top headlines',
        'path' : 'top-headlines'
    },
    {
        'text' : 'All articles',
        'path' : 'everything'
    },
    {
        'text' : 'All sources',
        'path' : 'sources'
    }
];
const arrayLanguages = [
    {
        'lang' : 'ar',
        'desc' : 'Arabian'
    },
    {
        'lang' : 'en',
        'desc' : 'English'
    },
    {
        'lang' : 'de',
        'desc' : 'Deutch'
    },
    {
        'lang' : 'es',
        'desc' : 'Spain'
    },
    {
        'lang' : 'fr',
        'desc' : 'French'
    },
    {
        'lang' : 'it',
        'desc' : 'Italy'
    },
    {
        'lang' : 'pt',
        'desc' : 'Portuguese'
    },
    {
        'lang' : 'ru',
        'desc' : 'Russian'
    },
    {
        'lang' : 'sv',
        'desc' : 'Swedish'
    }
];

const arrayCountires = [
    {
        'lang' : 'ar',
        'desc' : 'Arabian'
    },
    {
        'lang' : 'de',
        'desc' : 'Deutch'
    },
    {
        'lang' : 'es',
        'desc' : 'Spain'
    },
    {
        'lang' : 'fr',
        'desc' : 'French'
    },
    {
        'lang' : 'it',
        'desc' : 'Italy'
    },
    {
        'lang' : 'pt',
        'desc' : 'Portuguese'
    },
    {
        'lang' : 'ru',
        'desc' : 'Russian'
    },
    {
        'lang' : 'sv',
        'desc' : 'Swedish'
    }
];

const URL_TO_API ="https://newsapi.org/v2/";

let requesterInstance = null;
let application = null;
// sources https://newsapi.org/v2/sources?apiKey=f5d0ede14cdc42a990a57ff137f6c5ee
// everything https://newsapi.org/v2/everything?q=bitcoin&apiKey=f5d0ede14cdc42a990a57ff137f6c5ee
// topHeadlines https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f5d0ede14cdc42a990a57ff137f6c5ee

window.onload = function(){
    init();
};

function init(){
    application = new Application();
    application.createLayout();
}

class Application{
    constructor(){
        this.body = document.getElementById("body");
    }

    createLayout() {
        this.createSources();
        this.createEndpoints();
        this.createLanguages();
        this.createCountries();
        this.createSearch();
        this.createSearchButton();
    }

    createSources(){
        const selectSources = document.createElement("select");
        selectSources.id = "selectSources";
        this.body.appendChild(selectSources);

        //Create and append the options
        arraySources.forEach(function(source){
            const option = document.createElement("option");
            option.value = source;
            option.text = source;
            selectSources.appendChild(option);
        });
    }

    createEndpoints(){
        const selectEndpoints = document.createElement("select");
        selectEndpoints.id = "selectEndpoints";
        this.body.appendChild(selectEndpoints);

        //Create and append the options
        const optionEndpoint = document.createElement("option");
        optionEndpoint.value = '';
        optionEndpoint.text = '';
        selectEndpoints.appendChild(optionEndpoint);
        arrayEndpoints.forEach(function(endpoint){
            const option = document.createElement("option");
            option.value = endpoint.path;
            option.text = endpoint.text;
            selectEndpoints.appendChild(option);
        });
    }

    createLanguages(){
        const selectLanguages = document.createElement("select");
        selectLanguages.id = "selectLanguages";
        this.body.appendChild(selectLanguages);

        //Create and append the options
        const optionLang = document.createElement("option");
        optionLang.value = '';
        optionLang.text = '';
        selectLanguages.appendChild(optionLang);
        arrayLanguages.forEach(function(language){
            const option = document.createElement("option");
            option.value = language.lang;
            option.text = language.desc;
            selectLanguages.appendChild(option);
        });
    }

    createCountries(){
        const selectCountries = document.createElement("select");
        selectCountries.id = "selectCountries";
        this.body.appendChild(selectCountries);

        //Create and append the options
        const optionCountry = document.createElement("option");
        optionCountry.value = '';
        optionCountry.text = '';
        selectCountries.appendChild(optionCountry);
        arrayCountires.forEach(function(country){
            const option = document.createElement("option");
            option.value = country.lang;
            option.text = country.desc;
            selectCountries.appendChild(option);
        });
    }

    createSearch(){
        const inputSearch = document.createElement("input");
        inputSearch.id = "inputSearch";
        inputSearch.setAttribute("type", "search");
        this.body.appendChild(inputSearch);
    }

    createSearchButton(){
        const buttonGetArticle = document.createElement("button");
        const buttonText = document.createTextNode("Get Article");
        buttonGetArticle.appendChild(buttonText);
        buttonGetArticle.addEventListener("click",this.onButtonGetArticlePress.bind(this));
        this.body.appendChild(buttonGetArticle);
    }

    onButtonGetArticlePress (){
        const selectSources = document.getElementById("selectSources");
        const source = selectSources.options[selectSources.selectedIndex].value;

        const selectEndpoints = document.getElementById("selectEndpoints");
        const endpoint = selectEndpoints.options[selectEndpoints.selectedIndex].value;

        const selectLanguages = document.getElementById("selectLanguages");
        let language = selectLanguages.options[selectLanguages.selectedIndex].value;

        const inputSearch = document.getElementById("inputSearch");
        let searchString = inputSearch.value;

        const selectCountries = document.getElementById("selectCountries");
        let country = selectCountries.options[selectCountries.selectedIndex].value;

        const newsRequester = new NewsRequester(source, endpoint, language, country, searchString);
        newsRequester.requestNews()
            .then(function(response){
                const articles = response.articles;
                if(articles && articles.length > 0){
                    articles.forEach(function(oneArticle){
                        const article = new Article(oneArticle);
                        this.appendArticle(article);
                    }.bind(this))
                }
            }.bind(this));
    }

    appendArticle(article){
        const section = document.createElement('section');

        const aTitle = document.createElement('a');
        aTitle.setAttribute("link", article.url);
        aTitle.setAttribute("target", '_blank');
        const aTitleText = document.createTextNode(article.title);
        aTitle.appendChild(aTitleText);
        section.appendChild(aTitle);

        const aDesc = document.createElement('a');
        aDesc.setAttribute("link", article.url);
        aDesc.setAttribute("target", '_blank');
        const aDescText = document.createTextNode(article.description);
        aDesc.appendChild(aDescText);
        section.appendChild(aDesc);

        const aImg = document.createElement('a');
        const img = new Image();   // Create new img element
        img.src = article.urlToImage;
        aImg.appendChild(img);
        section.appendChild(aImg);


        this.body.appendChild(section);
    }
}


class NewsRequester{
    constructor(source, endpoint, language, country, searchString){
        this._source = source;
        this._endpoint = endpoint;
        this._language = language;
        this._country = country;
        this._searchString = searchString;

        if (!requesterInstance) {
            requesterInstance = this;
        }

        return requesterInstance;
    }

    requestNews(){
        let endpoint;

        switch(this._endpoint){
            case 'top-headlines':
                endpoint = 'top-headlines?sources';
                break;
            case 'everything':
                endpoint = 'everything?';
                break;
            case 'sources':
                endpoint = 'sources?';
                break;
            default:
                endpoint = 'top-headlines?sources';
                break;
        }

        let url = `${URL_TO_API}${endpoint}=${this._source}&apiKey=${API_KEY}`;
        if(this._searchString){
            url = `${url}&q=${this._searchString}`;
        }
        if(this._language){
            url = `${url}&language=${this._language}`;
        }
        if(this._country){
            url = `${url}&country=${this._country}`;
        }

        return new Promise(function(resolve, reject){
            fetch(url)
                .then(function(response) {
                    if(response.status === 200){
                        return response.json();
                    }
                })
                .then(function(response) {
                    resolve(response);
                })
                .catch(function(){
                    alert("can't retrieve articles");
                    reject();
                });
        })

    }
}

class Article{
    constructor(article){
        this.author = article.author;
        this.description = article.description;
        this.title = article.title;
        this.url = article.url;
        this.urlToImage = article.urlToImage;
    }
}