define(['ojs/ojcore', 'knockout', 'jquery',
        'appController'
    ],
    function(oj, ko, $, app) {
        function PzMainViewModel() {

            var self = this;

            //ViewModel properties
            self.view = ko.observable('question');
            self.hideAll = ko.observable(false);

            //ViewModel formulas
            self.showQn = function() {
                return self.view() === 'question';
            };

            self.handleActivated = function() {
                // self.view('question');
            };

            self.resultsConfig = function() {
                return {
                    name: 'results',
                    params: {
                        viewRef: self.view
                    }

                };
            };

            self.questionConfig = function() {
                return {
                    name: 'question',
                    params: {
                        hideAllRef: self.hideAll,
                        viewRef: self.view
                    }

                };
            };
        }
        return new PzMainViewModel();

    });
