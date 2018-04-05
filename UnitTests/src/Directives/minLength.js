function MinLengthDirective() {
    return {
        require: 'ngModel',
        link: function ($scope, $element, $attr, $ctrl) {
            function lengthValidation(value) {
                return $ctrl.$setValidity('minLength', value.length >= 20);
            }

            $ctrl.$parsers.push(lengthValidation);
        }
    };
}

module.exports = MinLengthDirective;