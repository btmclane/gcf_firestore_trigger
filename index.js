/**
 * Background Function triggered by a new Firestore document.
 *
 * @param {!Object} event The Cloud Functions event. (In this case: the actual Firestore document!)
 * @param {!Object} context Cloud Functions event metadata.
 */

exports.demoFirestoreTrigger = (event, context) => {
    const triggerResource = context.resource;

    console.log(`Function triggered by event on: ${triggerResource}`);
    console.log(`Event type: ${context.eventType}`);

    // Print the entire document object as a JavaScript object
    console.log("Event value as a JavaScript object:");

    // Print the entire document object as a JSON string
    console.log("Event value as a JSON string:");

};