sap.ui.controller("sources.controllers.view1", {
    onInit: function(oEvent) {

        this._oPnl = this.byId("idPnl");
    },
    addInput: function(){
        oInput1 = new sap.m.Input();
        delIcon = new sap.ui.core.Icon({
            src:"sap-icon://delete",
            press:this.onDeleteCcMail
        });
        _oCcLayout = new sap.m.FlexBox({
            alignItems:"Center",
            justifyContent:"Start",
            items:[oInput1,delIcon]
        });
        this._oPnl.addContent(_oCcLayout);
    },
    getValue: function(){
        debugger;
        var values = "";
        var pnlDom = this._oPnl.getDomRef()
        $(pnlDom).find('input').each(function(index, elem) {
            debugger;
            values += ", " + $(elem)[0].value;
        });
        alert(values);
    },
    onDeleteCcMail: function(oEvent){
        var rowItemContainer = oEvent.getSource().getParent();
        rowItemContainer.destroy();
    }
});

var app = new sap.m.App({});

var oView = sap.ui.xmlview({
    viewContent: jQuery("#view1").html()
});

app.addPage(oView);
app.placeAt("uiArea");