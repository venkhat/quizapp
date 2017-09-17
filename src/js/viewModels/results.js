define(['ojs/ojcore', 'knockout', 'jquery', 'appController',
        'ojs/ojtable', 'ojs/ojarraytabledatasource',
    ],
    function(oj, ko, $, app) {
        function ResultsViewModel() {
            var self = this;

            self.datasource = ko.observable(new oj.ArrayTableDataSource([]));

            self.handleActivated = function(info) {
                self.viewRef = info.valueAccessor().params.viewRef;
            };

            //Viewmodel formula. gets updated when view gets updated
            self.yourScore = function() {

                if (self.viewRef() === "question") {
                    return;
                }
                self.datasource(new oj.ArrayTableDataSource(app.qnStmts));
                var noQns = app.qnStmts.length,
                    totalMarks = app.qnStmts.reduce(function(acc, qn) {
                        return acc + qn.marks;
                    }, 0);
                return 'Your javascript score is ' + totalMarks + '/' + noQns;
            };
        }

        return new ResultsViewModel();
    });
