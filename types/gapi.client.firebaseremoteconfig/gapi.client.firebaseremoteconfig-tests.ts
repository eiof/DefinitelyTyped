/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('firebaseremoteconfig', 'v1', () => {
        /** now we can use gapi.client.firebaseremoteconfig */

        run();
    });

    async function run() {
        /**
         * Get the latest version Remote Configuration for a project.
         * Returns the RemoteConfig as the payload, and also the eTag as a
         * response header.
         */
        await gapi.client.projects.getRemoteConfig({
            project: "project",
        });
        /**
         * Update a RemoteConfig. We treat this as an always-existing
         * resource (when it is not found in our data store, we treat it as version
         * 0, a template with zero conditions and zero parameters). Hence there are
         * no Create or Delete operations. Returns the updated template when
         * successful (and the updated eTag as a response header), or an error if
         * things go wrong.
         * Possible error messages:
         * &#42; VALIDATION_ERROR (HTTP status 400) with additional details if the
         * template being passed in can not be validated.
         * &#42; AUTHENTICATION_ERROR (HTTP status 401) if the request can not be
         * authenticate (e.g. no access token, or invalid access token).
         * &#42; AUTHORIZATION_ERROR (HTTP status 403) if the request can not be
         * authorized (e.g. the user has no access to the specified project id).
         * &#42; VERSION_MISMATCH (HTTP status 412) when trying to update when the
         * expected eTag (passed in via the "If-match" header) is not specified, or
         * is specified but does does not match the current eTag.
         * &#42; Internal error (HTTP status 500) for Database problems or other internal
         * errors.
         */
        await gapi.client.projects.updateRemoteConfig({
            project: "project",
            validateOnly: true,
        });
    }
});
