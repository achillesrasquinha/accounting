module.exports = {
	"name": "Item",
	"doctype": "DocType",
	"isSingle": 0,
	"keywordFields": [
		"name",
		"description"
	],
	"fields": [
		{
			"fieldname": "name",
			"label": "Item Name",
			"fieldtype": "Data",
			"required": 1
		},
		{
			"fieldname": "description",
			"label": "Description",
			"fieldtype": "Text"
		},
		{
			"fieldname": "unit",
			"label": "Unit",
			"fieldtype": "Select",
			"options": [
				"No",
				"Kg",
				"Gram",
				"Hour",
				"Day"
			]
		},
		{
			"fieldname": "tax",
			"label": "Tax",
			"fieldtype": "Link",
			"target": "Tax"
		},
		{
			"fieldname": "rate",
			"label": "Rate",
			"fieldtype": "Currency"
		}
	]
}