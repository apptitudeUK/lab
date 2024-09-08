import { apps } from 'assets/apps-interop'

export async function getIntentsByContext(context, resultType = null) {
    const { type } = context
    const applications = apps;
    const intentsObj = {};

    for (const app of applications) {
        if (app.intents && app.intents.listensFor) {
            const appIntents = app.intents.listensFor;
            for (const [intentName, intentValue] of Object.entries(appIntents)) {
                if (intentValue.contexts && intentValue.contexts.includes(type)) {
                    if (!intentsObj[intentName]) {
                        intentsObj[intentName] = {apps:[]};
                    }
                    intentsObj.apps.push(app);
                }
            }
        }
    }
    return Object.values(intentsMap);
}

export async function handleInfoForIntent(intentOptions, clientIdentity) {
    const result = await getIntent(
        customSettings?.appProvider,
        intentOptions.name,
        intentOptions.context?.type
    );
    if (!result) {
    throw new Error(NO_APPS_FOUND);
}

return {
    intent: result.intent,
    apps: result.apps.map((app) => {
        const appEntry = {
            name: app.appId,
            appId: app.appId,
            title: app.title
        };
        return appEntry;
    })
};
}

