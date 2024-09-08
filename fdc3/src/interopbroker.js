/**
 * Get the information for the intents by context.
 * @param context The context to get the information for.
 * @param context.type The type of the context.
 * @param clientIdentity The identity of the client to get the information from.
 * @returns The information about the intents for the context.
 */
export async function handleInfoForIntentsByContext(context, clientIdentity)
{
    const intents = await getIntentsByContext(customSettings?.appProvider, context.type);

    if(intents.length === 0) {
		throw new Error(NO_APPS_FOUND);
	}

	return intents.map((entry) => ({
		intent: entry.intent,
		apps: entry.apps.map((app)=> ({
			name: app.appId,
			appId: app.appId,
			title: app.title
		}))
	}));
}
