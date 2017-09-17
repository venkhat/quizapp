/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
        'ojs/ojoffcanvas'
    ],
    function(oj, ko) {
        function ControllerViewModel() {
            var self = this;

            // Router setup
            self.router = oj.Router.rootInstance;
            self.router.configure({
                'pzmain': { label: 'Dashboard', isDefault: true }
            });
            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            
            
            // Application Name used in Branding Area
            self.appName = ko.observable("Puzzle Application");
            self.qnStmts = null; // will be assigned inside questions view
            
            
        }

        return new ControllerViewModel();
    }
);
