// This is your JavaScript code in a separate file

// Define a JavaScript function to trigger the print window and accept variables
function triggerPrintWindow(fullName, department) {

    // const confirmed = window.confirm(`Print ${fullName}'s information?`);

    // if (confirmed) {
    //     // Call the Dart function to update data (assuming it's named `updateData`)
    //     DartFunction.updateData(employeeId);

        // Define the HTML content with CSS styling
        const contentToPrint = `
            <html>
            <head>
                <style>
                    @page {
                        size: 4in 2in;
                        margin: 0.005in;
                    }
                    /* Remove the header and footer */
                    @page :first {
                        margin-top: 0;
                        margin-bottom: 0;
                    }
                    /* Define CSS for content size and layout */
                    .print-view {
                        display: flex;
                        justify-content: space-between;
                        padding: 0;
                        width: 100%;
                        box-sizing: border-box;
                    }
                    .labels-section {
                        float: left;
                        width: 100%;
                        font-size: 8vw; /* Adjust the font size as needed */
                        page-break-inside: avoid; /* Avoid page breaks inside this section */
                    }
                    .labels-section p {
                        margin-top: 0; /* Set margin-top for <p> elements to 0 */
                    }
                    .qr-code-section {
                        float: left;
                        width: 30%;
                        margin-top: 10%;
                        page-break-inside: avoid; /* Avoid page breaks inside this section */
                    }
                </style>
            </head>
            <body>
                <div class="print-view">
                    <div class="labels-section">
                    <p>Full Name:<br>${fullName}</p>
                    <p>Department:${department}</p>
                    
                    </div>
                    <div class="qr-code-section">
                        <!-- Add your QR code here -->
                    </div>
                </div>
                <script>
                    // Close the print window after printing or canceling
                    window.onbeforeprint = function () {
                        // The print dialog is about to open
                    };
                    window.onafterprint = function () {
                        // The print dialog has been closed (printed or canceled)
                        window.close();
                    };
                </script>
            </body>
            </html>
        `;

        // Create a new window and write the content to it for printing
        const printWindow = window.open('', '', 'width=600,height=600');
        printWindow.document.open();
        printWindow.document.write(contentToPrint);
        printWindow.document.close();

        // Trigger the print dialog for the new window
        printWindow.print();
    
}
// You can include additional JavaScript functions if needed
