export const apps = [
	{
		"appId": "interop-broadcast-view",
		"name": "interop-broadcast-view",
		"title": "Context using Interop API",
		"description": "This is an example of setting and listening to context using the interop api and seeing a code sample of how to do it.",
		"manifest": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/interop-api/context/interop-broadcast-view.json",
		"manifestType": "view",
		"icons": [
			{
				"src": "http://localhost:8080/common/images/icon-blue.png"
			}
		],
		"contactEmail": "contact@example.com",
		"supportEmail": "support@example.com",
		"publisher": "OpenFin",
		"intents": {
			"listensFor": {
				"ViewChart": {
					"contexts": [
						"fdc3.instrument"
					]
				},
				"myApp.GetPrice": {
					"contexts": [
						"fdc3.instrument"
					],
					"resultType": "myApp.quote"
				}
			},
			"raises": {
				"ViewOrders": [
					"fdc3.instrument",
					"fdc3.organization"
				],
				"StartEmail": [
					"fdc3.email"
				]
			}
		},
		"images": [
			{
				"src": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/images/previews/view-context-interop-api.png"
			}
		],
		"tags": ["view", "interop", "tools"]
	},
	{
		"appId": "interop-intent-view",
		"name": "interop-intent-view",
		"title": "Intents using Interop API",
		"description": "This is an example of firing and listening to intents using the interop api and seeing a code sample of how to do it. Multiple instances can be launched.",
		"manifest": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/interop-api/intent/interop-intent-multi-view.json",
		"manifestType": "view",
		"icons": [
			{
				"src": "http://localhost:8080/common/images/icon-blue.png"
			}
		],
		"contactEmail": "contact@example.com",
		"supportEmail": "support@example.com",
		"publisher": "OpenFin",
		"intents": {
			"listensFor": {
				"ViewChart": {
					"contexts": [
						"fdc3.instrument"
					]
				},
				"myApp.GetPrice": {
					"contexts": [
						"fdc3.instrument"
					],
					"resultType": "myApp.quote2"
				}
			},
		},
		"images": [
			{
				"src": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/images/previews/view-intents-interop-api.png"
			}
		],
		"tags": ["view", "interop", "intent", "openfin", "tools"]
	},
	{
		"appId": "interop-broadcast-view2",
		"name": "interop-broadcast-view2",
		"title": "Context using Interop API",
		"description": "This is an example of setting and listening to context using the interop api and seeing a code sample of how to do it.",
		"manifest": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/interop-api/context/interop-broadcast-view.json",
		"manifestType": "view",
		"icons": [
			{
				"src": "http://localhost:8080/common/images/icon-blue.png"
			}
		],
		"contactEmail": "contact@example.com",
		"supportEmail": "support@example.com",
		"publisher": "OpenFin",
		"intents": {
			"listensFor": {
				"ViewChart": {
					"contexts": [
						"fdc3.instrument"
					]
				},
				"myApp.GetPrice": {
					"contexts": [
						"fdc3.instrument"
					],
					"resultType": "myApp.quote"
				}
			},
			"raises": {
				"ViewOrders": [
					"fdc3.instrument",
					"fdc3.organization"
				],
				"StartEmail": [
					"fdc3.email"
				]
			}
		},
		"images": [
			{
				"src": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/images/previews/view-context-interop-api.png"
			}
		],
		"tags": ["view", "interop", "tools"]
	},
	{
		"appId": "interop-intent-view2",
		"name": "interop-intent-view2",
		"title": "Intents using Interop API",
		"description": "This is an example of firing and listening to intents using the interop api and seeing a code sample of how to do it. Multiple instances can be launched.",
		"manifest": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/interop-api/intent/interop-intent-multi-view.json",
		"manifestType": "view",
		"icons": [
			{
				"src": "http://localhost:8080/common/images/icon-blue.png"
			}
		],
		"contactEmail": "contact@example.com",
		"supportEmail": "support@example.com",
		"publisher": "OpenFin",
		"intents": {
			"listensFor": {
				"ViewChart": {
					"contexts": [
						"fdc3.instrument"
					]
				},
				"StartCall": {
					"contexts": [
						"fdc3.contact"
					]
				},
				"myApp.GetPrice": {
					"contexts": [
						"fdc3.instrument"
					],
					"resultType": "myApp.quote"
				}
			},
		},
		"images": [
			{
				"src": "https://built-on-openfin.github.io/dev-extensions/extensions/v19.0.0/interop/images/previews/view-intents-interop-api.png"
			}
		],
		"tags": ["view", "interop", "intent", "openfin", "tools"]
	}
]

