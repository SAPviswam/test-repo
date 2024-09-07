sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment",
    "sap/m/MessageBox"
],
function (Controller, MessageToast, Fragment, MessageBox) {
    "use strict";

    return Controller.extend("com.app.practice.controller.Home", {
        onInit: function () {},

        // onClickDialogBox: function () {
        //     // Load and open the dialog fragment
        //     if (!this._oDialog) {
        //         Fragment.load({
        //             id: this.getView().getId(),
        //             name: "com.app.practice.fragment.newaccount", // Corrected path to the fragment
        //             controller: this
        //         }).then(function (oDialog) {
        //             this._oDialog = oDialog;
        //             this.getView().addDependent(this._oDialog);
        //             this._oDialog.open();
        //         }.bind(this));
        //     } else {
        //         this._oDialog.open();
        //     }
        // },
        // onClose: function () {
        //     debugger
        //     this.byId("idAdminDialog").close();
        // }
        // onClickDialogBox: function () {
        //     // Open a new window for printing
        //     var printWindow = window.open('', '', 'height=600,width=800');

        //     // Write HTML content to the print window
        //     printWindow.document.write('<html><head><title>Print Barcode</title>');
        //     printWindow.document.write('<style>');
        //     printWindow.document.write('body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }');
        //     printWindow.document.write('.barcode { margin: 20px auto; }');
        //     printWindow.document.write('</style>');
        //     printWindow.document.write('<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>');
        //     printWindow.document.write('</head><body>');

        //     // Add the barcode container
        //     printWindow.document.write('<div class="barcode">');
        //     printWindow.document.write('<svg id="barcode"></svg>');
        //     printWindow.document.write('</div>');

        //     // Close the body and html tags
        //     printWindow.document.write('</body></html>');
        //     printWindow.document.close();

        //     // Wait for the document to be fully loaded before generating the barcode
        //     printWindow.onload = function () {
        //         // Generate the barcode
        //         printWindow.JsBarcode("#barcode", "1234567890", {
        //             format: "CODE128",
        //             width: 2,   // Width of each bar
        //             height: 25, // Height of the barcode
        //             displayValue: false // Do not display the value below the barcode
        //         });

        //         // Set timeout to ensure the barcode is rendered before printing
        //         setTimeout(function() {
        //             printWindow.print();
        //         }, 1000);
        //     };
        // }
        onClickDialogBox: function () {
            // Define the barcode data
            var barcodeData = "1234567890";

            // Open a new window for printing
            var printWindow = window.open('', '', 'height=600,width=800');

            // Write HTML content to the print window
            printWindow.document.write('<html><head><title>Print Barcode</title>');
            printWindow.document.write('<style>');
            printWindow.document.write('body { font-family: Arial, sans-serif; text-align: center; margin: 20px; }');
            printWindow.document.write('.barcode-container { margin: 20px auto; text-align: center; }');
            printWindow.document.write('.barcode { margin: 0 auto; }');
            printWindow.document.write('.barcode-data { margin-top: 10px; font-size: 16px; font-weight: bold; }');
            printWindow.document.write('</style>');
            printWindow.document.write('<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js"></script>');
            printWindow.document.write('</head><body>');

            // Add the barcode container
            printWindow.document.write('<div class="barcode-container">');
            printWindow.document.write('<svg id="barcode" class="barcode"></svg>');
            printWindow.document.write('<div class="barcode-data" id="barcodeData"></div>'); // Empty div for barcode data
            printWindow.document.write('</div>');

            // Close the body and html tags
            printWindow.document.write('</body></html>');
            printWindow.document.close();

            // Wait for the document to be fully loaded before generating the barcode
            printWindow.onload = function () {
                // Generate the barcode
                printWindow.JsBarcode("#barcode", barcodeData, {
                    format: "CODE128",
                    width: 2,    // Width of each bar
                    height: 25,  // Height of the barcode
                    displayValue: false // Do not display the value below the barcode (handled manually)
                });

                // Display the barcode data
                printWindow.document.getElementById("barcodeData").innerText = barcodeData;

                // Set timeout to ensure the barcode is rendered before printing
                setTimeout(function() {
                    printWindow.print();
                }, 1000);
            };
        },
        onPressSendEmail : function() {
         MessageBox.confirm("Do you want to send an Email");
        }
    });
});
