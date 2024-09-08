

export async function getIntentsByContext(appProviderSettings, contextType) {
	if (!Array.isArray(apps)) {
		console.warn("Unable to get apps so we can not get apps and intents that support a particular context");
		return [];
	}

	const intentsMap = {};

	for (const app of apps) {
		if (app.intents !== undefined) {
			for (const appIntent of app.intents) {
				if (Array.isArray(appIntent.contexts) && appIntent.contexts.includes(contextType)) {
					updateAppIntentsEntry(intentsMap, appIntent, app);
				}
			}
		}
	}

	return Object.values(intentsMap);
}


/**
 * Update the entry for keeping tracking of supported apps for intents.
 * @param intentsMap The map of intents.
 * @param intent The intent to app an entry for.
 * @param app The application supporting the intent.
 */
function updateAppIntentsEntry(intentsMap, intent, app) {
	if (intentsMap[intent.name] === undefined) {
		// in a production app you would either need to ensure that every app was populated with the same name & displayName for an intent from a golden source (e.g. intents table) so picking the first entry wouldn't make a difference.
		// or you could pull in a golden source of intents from a service and then do a lookup using the intent name to get an object with intent name and official display name.
		intentsMap[intent.name] = {
			intent: {
				name: intent.name,
				displayName: intent.displayName
			},
			apps: []
		};
	}
	intentsMap[intent.name].apps.push(app);
}

