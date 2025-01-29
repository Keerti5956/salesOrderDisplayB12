sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("app.salesorderdisplay.controller.View1", {
        onInit: function () {

        },
        onSelect:function(oEvent){
            var oItem=oEvent.getParameter("selectedItem")
            var key=oItem.mProperties.key

            var entity="/BusinessPartnerSet('"+key+"')/ToSalesOrder"
            var oModel=this.getOwnerComponent().getModel()
            var that=this
            oModel.read(entity,{
                success:function(odata,response){
                    // if(response.statusCode==="200" || response.statusText==="OK"){
                        var oJmodel=new JSONModel(odata)
                        that.getView().setModel(oJmodel,"SOModel")
                    // }
                    // console.log(odata);
                    // console.log(response);
                    
                    
                },
                error:function(error){
                    if(error.statusCode=="404" || error.statusText=="Not founf"){
                        sap.m.MessageBox.show(error.message)
                    }
                    

                }

            })
        }   
    });
});
