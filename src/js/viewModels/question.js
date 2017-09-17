define(['ojs/ojcore', 'knockout', 'jquery',
        'appController'
    ],
    function(oj, ko, $, app) {
        function QuestionViewModel() {
            var self = this;

            self.ansOptions = [{
                value: 1,
                label: 'A'
            }, {
                value: 2,
                label: 'B'
            }, {
                value: 3,
                label: 'C'
            }, {
                value: 4,
                label: 'D'
            }];

            //ViewModel properties
            self.qnStmt = ko.observable();
            self.qnStmts = ko.observable();
            self.qnNo = ko.observable(0);
            self.chosenAns = ko.observable();


            //ViewModel Formulas
            self.qnsCount = ko.pureComputed(function() {
                return self.qnStmts().length;
            });
            self.qnStmt = ko.pureComputed(function() {
                return self.qnStmts()[self.qnNo() - 1];
            });


            //Ojet lifecycle functions
            self.handleActivated = function(info) {
                //Parent viewmodel properties that are being passed into this view
                self.parentHideAllRef = info.valueAccessor().params.hideAllRef;
                self.parentViewRef = info.valueAccessor().params.viewRef;
                return new Promise(
                    function(resolve, reject) {
                        var jqxhr = $.ajax({
                                url: "https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json",
                                type: "GET"
                            })
                            .done(function(data) {
                                if (data.length) {
                                    self.qnStmts(data);
                                    app.qnStmts = data;
                                    self.qnNo(self.qnNo() + 1);
                                } else {
                                    self.parentHideAllRef(true);
                                }
                                resolve(data);
                            })
                            .fail(function(error) {
                                reject(error);
                                alert('Failed to fetch qns');
                            });

                    });
            };

            //Button change handler
            self.ansChange = function(event, cmpt) {

                if (cmpt.option !== 'checked' || cmpt.value === null) {
                    return;
                }

                app.qnStmts[self.qnNo() - 1].chosenAns = cmpt.value;
                app.qnStmts[self.qnNo() - 1].marks = (self.qnStmt().answer ==
                    cmpt.value) ? 1 : 0;

                self.chosenAns(null);
                if (self.qnNo() < self.qnsCount()) {
                    self.qnNo(self.qnNo() + 1);

                } else {
                    self.parentViewRef('results');

                }

            };

        }

        return new QuestionViewModel();



    });
