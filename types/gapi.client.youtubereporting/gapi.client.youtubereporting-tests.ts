/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('youtubereporting', 'v1', () => {
        /** now we can use gapi.client.youtubereporting */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View monetary and non-monetary YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
            /** View YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics.readonly',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Creates a job and returns it. */
        await gapi.client.jobs.create({
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Deletes a job. */
        await gapi.client.jobs.delete({
            jobId: "jobId",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Gets a job. */
        await gapi.client.jobs.get({
            jobId: "jobId",
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
        });
        /** Lists jobs. */
        await gapi.client.jobs.list({
            includeSystemManaged: true,
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
            pageSize: 3,
            pageToken: "pageToken",
        });
        /**
         * Method for media download. Download is supported
         * on the URI `/v1/media/{+name}?alt=media`.
         */
        await gapi.client.media.download({
            resourceName: "resourceName",
        });
        /** Lists report types. */
        await gapi.client.reportTypes.list({
            includeSystemManaged: true,
            onBehalfOfContentOwner: "onBehalfOfContentOwner",
            pageSize: 3,
            pageToken: "pageToken",
        });
    }
});
