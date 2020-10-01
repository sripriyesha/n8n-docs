(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{930:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"webhook"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[e._v("#")]),e._v(" Webhook")]),e._v(" "),o("p",[e._v("The Webhook node is one of the most powerful nodes in n8n. It allows you to create "),o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("webhooks"),o("OutboundLink")],1),e._v(" which can be used to receive data from apps and services when an event occurs.")]),e._v(" "),o("p",[e._v("While building or testing a workflow, we recommend that you use a test webhook URL. Using a test webhook ensures that you can view the incoming data in the Editor UI, which is useful for debugging. Make sure that you click on the "),o("em",[e._v("Execute Node")]),e._v(" button to register the webhook before sending the data to the test webhook. The test webhook stays active for 120 seconds.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),o("ol",[o("li",[e._v("When using the Webhook node on the localhost, ensure that n8n is running with the "),o("RouterLink",{attrs:{to:"/getting-started/quickstart.html#start-with-tunnel"}},[e._v("tunnel")]),e._v(" mode.")],1),e._v(" "),o("li",[e._v("When working with a Production webhook, please ensure that you have saved and activated the workflow. Don’t forget that the data flowing through the webhook won’t be visible in the Editor UI with the Production webhook.")])])]),e._v(" "),o("h2",{attrs:{id:"node-reference"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),o("p",[e._v("First of all, in the parameters section, we have the Webhook URLs. Clicking on that will reveal the URLs for the webhook. Here you have two options, let’s understand the difference between them.")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Webhook URLs")])]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Production")]),e._v(": A Production webhook is only registered when a workflow has been activated (via the switch on the top right of the page). You will never see its data in the Editor UI. To save the executions, you can either set that as a global default or you can specify that on a per-workflow basis in the workflow settings. You will then see the data from the workflow under ‘Past Executions’.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Test")]),e._v(": A Test webhook is only registered in the time between executing a workflow via the UI and until the first call gets made (when it displays “waiting for Webhook call”). After the Test webhook gets called for the first time, it displays the data in the Editor UI, and then gets deactivated.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Authentication:")]),e._v(" Here we have the option to add authentication. You can set the authentication to None, Basic Auth (username and password) or Header Auth (name and value).")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("HTTP Method:")]),e._v(" You can define whether the request will use the GET or the POST HTTP method.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Path:")]),e._v(" You can enter a custom path for your webhook. This is the path that the webhook will listen to. Please make sure that this is a unique path per method (GET, POST) across your workflows. You don't need to change this if you are unsure about it.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Response Code:")]),e._v(" Here you can specify the HTTP response code to return. You’ll probably want to keep it set at 200.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Response Mode:")]),e._v(" This defines when and how to respond to the webhook. Here we have two options:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("On Received:")]),e._v(" This option sends the defined response code back as soon as it receives data from the webhook.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Last Node:")]),e._v(" This option returns the data of the last node executed. If the Webhook node is the only node (or the first node) in the workflow, this option would just return its own data as it itself would be the node that was last executed.")])])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Response Data:")]),e._v(" This option becomes visible if you selected the Last Node for the Response Mode. Here you have three configuration options:")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("All Entries:")]),e._v(" This returns all the entries of the last executed node and always returns an array.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("First Entry JSON:")]),e._v(" This returns the JSON data of the first entry of the last executed node. This option always returns a JSON object.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("First Entry Binary:")]),e._v(" This returns the Binary data of the first entry of the last executed node. This option always returns a binary file.")])])])])]),e._v(" "),o("h2",{attrs:{id:"further-reading"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/creating-custom-incident-response-workflows-with-n8n-9baef0bbedb9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating Custom Incident Response Workflows with n8n 🚨"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/automating-cross-posting-blog-posts-using-n8n-%EF%B8%8F-af2a89601810",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cross-posting content automatically with n8n ✍️"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/effortless-video-collaboration-with-whereby-mattermost-and-n8n-8fc397feb9cb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Effortless video collaboration with Whereby, Mattermost, and n8n 📹"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://medium.com/n8n-io/webhooks-fun-with-n8n-and-mattermost-4ebf7e2b4d2a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webhooks Fun with n8n and Mattermost 🍸"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);