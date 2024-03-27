# Cloud Function Triggered by New Firestore Document
This demo code shows how to trigger a Google Cloud Function when a document is created in a specific collection in a specific database. The source code will also demonstrate how to access the content of the newly-created document.

## Deploying the Cloud Function
The following command should be executed in the **same** Google Cloud Project as the Firestore database.

In this example, it will run when a new document is added to the `students` collection in the `(default)` database.

```
gcloud functions deploy demo_firestore_trigger \
--entry-point demoFirestoreTrigger \
--runtime nodejs18 \
--trigger-event "providers/cloud.firestore/eventTypes/document.create" \
--trigger-resource "projects/sp22-41200-elliott-dev-travel/databases/(default)/documents/students/{pushId}"
```