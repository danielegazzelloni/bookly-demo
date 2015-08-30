/* 
 * Provides controllers to my test app
 * 
 * @author Daniele Gazzelloni
 */



/**************************************************** 
 *                       INDEX 
 * **************************************************/

BooklyFE.controller("topTabsController", function ($scope) {
    // This is the default tab
    $scope.topTab = 'jobs';

    $scope.setTab = function (tab) {
        $scope.topTab = tab;
    };
});




/**************************************************** 
 *                       JOBS 
 * **************************************************/


BooklyFE.controller("jobsController", function ($scope) {
    $scope.jobs = [
        {
            jobID: "7224.11",
            jobDate: "2015-03-30",
            product: "Product 1",
            category: "Category A",
            originLang: "us",
            targetLang: "fr",
            ver: "1.1.1",
            status: "Correction",
            tmCode: "045523.02",
            tmVer: "3.1.1"
        },
        {
            jobID: "2232.15",
            jobDate: "2015-01-12",
            product: "Product 2",
            category: "Category B",
            originLang: "gr",
            targetLang: "de",
            ver: "1.2.0",
            status: "Revision",
            tmCode: "559423.02",
            tmVer: "2.0.0"
        },
        {
            jobID: "2351.45",
            jobDate: "2015-02-13",
            product: "Product 3",
            category: "Category C",
            originLang: "fr",
            targetLang: "de",
            ver: "1.2.1",
            status: "Preliminar Operations",
            tmCode: "552200.06",
            tmVer: "1.0.8"
        },
        {
            jobID: "7232.45",
            jobDate: "2014-04-10",
            product: "Product 4",
            category: "Category D",
            originLang: "gb",
            targetLang: "es",
            ver: "2.1.2",
            status: "Final Operations",
            tmCode: "493910.21",
            tmVer: "2.0.0"
        },
        {
            jobID: "23134.45",
            jobDate: "2015-01-20",
            product: "Product 5",
            category: "Category E",
            originLang: "it",
            targetLang: "br",
            ver: "1.0.1",
            status: "Translation",
            tmCode: "251400.29",
            tmVer: "0.1.1"
        }
    ];

    $scope.selectedRow = null;
    
    $scope.setClickedRow = function (index) {
        $scope.selectedRow = index;
    };
});


BooklyFE.controller("leftSearchbarController", ["$scope", function ($scope) {
    $scope.checked = false; // This will be binded using the ps-open attribute

    $scope.toggleSearchbar = function () {
        $scope.checked = !$scope.checked
    }

    $scope.clearSearchbar = function () {
        // empty, for now!
    }
}]);


/**************************************************** 
 *                       PRODUCTS 
 * **************************************************/

BooklyFE.controller("productsController", ["$scope", function ($scope) {
    $scope.treedata =
        [
            {"Name": "Accessories", "Markets": "", "Version": "", "Language": "", "Date": "21/01/2015", "children": {"type": "directory" }} ,
            {"Name": "Guidebooks", "Markets": "", "Version": "", "Language": "", "Date": "21/01/2015", "children": [
                    {"Name": "Product 00123", "Markets": "", "Version": "v.2", "Language": "gb es", "Date": "06/02/2015", "children": [
                        {"Name": "Italian Guidebook", "Markets": "Italy - French - Spain - Switzerland", "Version": "", "Language": "", "Date": "", "children": []},
                        {"Name": "English Guidebook", "Markets": "Italy - Ireland - England - Spain - Switzerland - Germany", "Version": "", "Language": "", "Date": "", "children": []},
                        {"Name": "Refmat", "Markets": "Italy - Ireland - England - Spain - Switzerland - Germany", "Version": "", "Language": "", "Date": "", "children": []}
                    ]},
                    {"Name": "Product 292334", "Markets": "", "Version": "v.1", "Language": "de it", "Date": "29/01/2015", "children": [
                        {"Name": "Italian Guidebook", "Markets": "Italy - French - Spain - Switzerland", "Version": "", "Language": "", "Date": "", "children": []},
                        {"Name": "Swedish Guidebook", "Markets": "Italy - Ireland - England - Spain - Switzerland - Germany", "Version": "", "Language": "", "Date": "", "children": []},
                        {"Name": "Refmat", "Markets": "Italy - Ireland - England - Spain - Switzerland - Germany", "Version": "", "Language": "", "Date": "", "children": []}
                    ]}
            ]}
        ];
        
    // main column definition property    
    $scope.expanding_property = {
            field: "Name",
            sortable : true,
            filterable: true
        };
    
    // columns definition properties
    $scope.col_defs = [
        { 
            field: "Markets",
            sortable: true
        },
        { 
            field: "Version",
            sortable: true
        },
        { 
            field: "Language",
            filterable: true,
            cellTemplate: "<span class=\"flag-icon flag-icon-{{row.branch[col.field] | split:' ':0}}\"></span> &nbsp; <span class=\"flag-icon flag-icon-{{row.branch[col.field] | split:' ':1}}\"></span>",
            sortable: true
        },
        { 
            field: "Date",
            sortable: true
        }
    ];
    
    // Allows expand/collapse on click
    $scope.clickHandler = function(branch) {
        if (branch.children != null && branch.children.length) {
            branch.expanded = !branch.expanded;
        }
    };
}]);



/**************************************************** 
 *                       DOCS 
 * **************************************************/

BooklyFE.controller("docsController", ["$scope", function ($scope) {
    $scope.treedata =
        [
            {"Name": "Charges", "Date": "01/21/2015", "Version": "0.1.3", "Author": "Al Pacino", "children": {"type": "directory" }} ,
            {"Name": "Sistems", "Date": "01/20/2015", "Version": "0.2.2", "Author": "James Bon Jr.", "children": [
                    {"Name": "Quality Assurance Systems", "Date": "01/25/2015", "Version": "1.2.0", "Author": "Mahatma Gandhi", "children": []},
                    {"Name": "Shippings Systems", "Date": "02/12/2015", "Version": "4.2.13", "Author": "Johnny Depp", "children": []},
                    {"Name": "Tracking Systems", "Date": "02/10/2015", "Version": "0.1.1", "Author": "Austin Powers", "children": []}
            ]},
            {"Name": "Contracts", "Date": "01/18/2015", "Version": "0.1.0", "Author": "James Bon Jr.", "children": {"type": "directory" }},
            {"Name": "Communication Flow", "Date": "01/20/2015", "Version": "1.1.0", "Author": "George Bush", "children": {"type": "directory" }}
    ];
    
    // main column definition property
    $scope.expanding_property = {
            field: "Name",
            sortable : true,
            filterable: true
        };
    
    // column definition properties 
    $scope.col_defs = [
        { 
            field: "Date",
            sortable: true
        },
        { 
            field: "Version",
            sortable: true
        },
        { 
            field: "Author",
            sortable: true
        }
    ];
    
    // Allows expand/collapse on click
    $scope.clickHandler = function(branch) {
        if (branch.children != null && branch.children.length) {
            branch.expanded = !branch.expanded;
        }
    };
        
}]);




/**************************************************** 
 *                    STATISTICS 
 * **************************************************/

BooklyFE.controller("statisticsController", ["$scope", function ($scope) {
    
    $scope.treedata =
        [
            {"Name": "Marketing Area (12)", "children": [
                    {"Name": "Single Translation Expenses Analysis", "children": []},
                    {"Name": "Global Translation Expenses Analysis", "children": []},
                    {"Name": "Client Geolocation", "children": []},
                    {"Name": "Single Product Costs", "children": []},
                    {"Name": "Single Product Costs + Translation", "children": []},
                    {"Name": "Single Product Costs + Translation + Shipment", "children": []},
                    {"Name": "Marketing Cost Analysis", "children": []},
                    {"Name": "Single Product Costs + Market Analysis", "children": []},
                    {"Name": "Shipments Cost Analysis", "children": []},
                    {"Name": "Temporal Flow (absolute)", "children": []},
                    {"Name": "Temporal Flow (by market)", "children": []},
                    {"Name": "Temporal Flow (by product)", "children": []}
            ]},
            {"Name": "Area Cronologia (0)", "children": {"type": "directory" }} ,
            {"Name": "Functional Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Tracking Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Economical/Statistical Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Human Recruitment Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Shipment Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Geolocation Area (0)", "children": {"type": "directory" }} ,
            {"Name": "Time Management Area (0)", "children": {"type": "directory" }}
    ];
    
    // Allows expand/collapse on click
    $scope.clickHandler = function(branch) {
        if (branch.children != null && branch.children.length) {
            branch.expanded = !branch.expanded;
        }
    }
}]);