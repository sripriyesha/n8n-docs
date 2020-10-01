(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{574:function(e,t,o){e.exports=o.p+"assets/img/workflow.6147a5ba.png"},575:function(e,t,o){e.exports=o.p+"assets/img/CustomerIo_node.2d1d4669.png"},576:function(e,t,o){e.exports=o.p+"assets/img/CustomerIo1_node.8bf057aa.png"},952:function(e,t,o){"use strict";o.r(t);var s=o(26),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"customer-io"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#customer-io"}},[e._v("#")]),e._v(" Customer.io")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://customer.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customer.io"),s("OutboundLink")],1),e._v(" enables users to send newsletters to selected segments of customers using their website data. You can send targeted emails, push notifications, and SMS to lower churn, create stronger relationships, and drive subscriptions.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/CustomerIo/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Customer")]),e._v(" "),s("ul",[s("li",[e._v("Create/Update a customer")]),e._v(" "),s("li",[e._v("Delete a customer")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Event")]),e._v(" "),s("ul",[s("li",[e._v("Track a customer event")]),e._v(" "),s("li",[e._v("Track an anonymous event")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Campaign")]),e._v(" "),s("ul",[s("li",[e._v("Get a campaign")]),e._v(" "),s("li",[e._v("Get all campaigns")]),e._v(" "),s("li",[e._v("Get metrics")])])]),e._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[e._v("Segment")]),e._v(" "),s("ul",[s("li",[e._v("Add a customer")]),e._v(" "),s("li",[e._v("Remove a customer")])])]),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to create a customer and add them to a segment in Customer.io. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/646",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Customer.io")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(574),alt:"A workflow with the Customer.io node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-customerio-node-upsert-customer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-customerio-node-upsert-customer"}},[e._v("#")]),e._v(" 2. CustomerIo node (upsert: customer)")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Customer.io node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/CustomerIo/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Enter a customer id in the "),s("em",[s("strong",[e._v("ID")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" button and select 'Custom Properties' from the dropdown list.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Choose Option To Add")])]),e._v(" button.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("name")]),e._v(" in the "),s("em",[s("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the name of the customer in the "),s("em",[s("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[s("img",{attrs:{src:o(575),alt:"Using the Customer.io node to create a new customer"}})]),e._v(" "),s("div",{pre:!0},[s("h3",{pre:!0,attrs:{id:"_3-customerio1-node-add-segment"}},[s("a",{pre:!0,attrs:{class:"header-anchor",href:"#_3-customerio1-node-add-segment"}},[e._v("#")]),e._v(" 3. CustomerIo1 node (add: segment)")]),e._v(" "),s("ol",[s("li",[e._v("Select the credentials that you entered in the previous Customer.io node.")]),e._v(" "),s("li",[e._v("Select 'Segment' from the "),s("em",[s("strong",[e._v("Resource")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("Customer IDs")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > CustomerIo > Output Data > JSON > id. You can also add the following expression: "),s("code",[e._v('{{$node["CustomerIo"].json["id"]}}')]),e._v(".")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[s("img",{attrs:{src:o(576),alt:"Using the Customer.io node to add the customer to a segment"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);