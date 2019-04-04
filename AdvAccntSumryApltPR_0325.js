
if( typeof( SiebelAppFacade.AdvAccntSumryApltPR ) === "undefined" ){

    SiebelJS.Namespace( "SiebelAppFacade.AdvAccntSumryApltPR" );
    //Module with its dependencies

    define("siebel/custom/AdvAccntSumryApltPR", ["siebel/phyrenderer"], function () {

        SiebelAppFacade.AdvAccntSumryApltPR = ( function(){
            function AdvAccntSumryApltPR( pm ){
                SiebelAppFacade.AdvAccntSumryApltPR.superclass.constructor.call( this, pm );
            }
            SiebelJS.Extend( AdvAccntSumryApltPR, SiebelAppFacade.PhysicalRenderer );
            AdvAccntSumryApltPR.prototype.Init = function () {
                SiebelAppFacade.AdvAccntSumryApltPR.superclass.Init.call(this);


            };
			 AdvAccntSumryApltPR.prototype.ShowUI = function () {

				SiebelAppFacade.AdvAccntSumryApltPR.superclass.ShowUI.apply(this, arguments);
				//alert("Acccount Summary");
					console.log(" Enter AccountSummaryPR");
				var controls = this.GetPM().Get( "GetControls" );
				console.log(" After Getting PM Controls");
				var lsEQMctrl = controls["QualPeriodPoint2Qual"];
				var lsEQSctrl = controls["QualPeriodPoint3Qual"];
				var lsCurTierctrl = controls["ADV Tier Name"];
				var lsPoint6Valuectrl = controls["Point6Value"];
				var lsadvmileagectrl = controls["ADVMileageExpirationDate"];
				var lslastsctctrl = controls["ADVLastActivityDate"];
				var lsmilmilerctrl = controls["LifetimePoint5Value"];
				var lsMembership = controls["ADV Membership"];
				var memctrl= $("[name='"+lsMembership.GetInputName()+"']").parent();

				var lsMemberIdctrl = controls["Member Id"];
				var lsMemberIdval = this.GetPM().ExecuteMethod("GetFieldValue",lsMemberIdctrl);
				var view = SiebelApp.S_App.GetActiveView();
				var viewname = view.GetName();
				console.log(" After Initializing variables");



			    //var lschallengeProgctrl = controls["ADV Challenge Progress"];

				//console.log("Challeng"+lschallengeProgctrl.GetInputName());
				 $("#QualPeriodPoint2Qual_Label").parent().text("EQMs").addClass( "eqmclsname" );
				 $("#QualPeriodPoint3Qual_Label").parent().text("EQSs").addClass( "eqsclsname" );

				 $("#Point6Value_Label").parent().text("AEMs").addClass( "aemclsname" );
				 $("#ADVMileageExpirationDate_Label").parent();
				 $("#ADVMileageExpirationDate_Label").parent().addClass( "expiryname" );

				 $("#ADVMileageExpirationDate_Label").parent().text("EXPIRATION");
				  $("#LifetimePoint5Value_Label").parent().addClass( "millonmilername" );
				 $("#LifetimePoint5Value_Label").parent().text("MILLION MILER");
				 $("#ADVLastActivityDate_Label").parent().addClass( "lastactivityname" );
				 $("#ADVLastActivityDate_Label").parent().text("LAST ACTIVITY");
				$("#ADV_Applet_Header_Label").parent().css({'font-size':'24px', 'padding-left':'15px'});
				 $("#ADV_Applet_Header_Label").parent().text("AADVANTAGE ACCOUNT SUMMARY");

				 $(".millonmilername").click(function (){
				 SiebelApp.S_App.GotoView("LOY Member Tier View");
				 });

				 $(".expiryname").click(function (){
				 SiebelApp.S_App.GotoView("ADV Member Expired Miles View");
				 });

				/* 20-5-2016 811376 defect change *//*
				$(".expiryname").css({"position": "absolute","margin-top": "40px"});
				$(".lastactivityname").css({"position":"absolute","margin-top": "20px","margin-left": "34px"});
				$(".millonmilername").css({ "margin-top":" 37px","margin-left":" 33px","position":"absolute"});
				*/
				/*
				 setTimeout(function(){
					var expvalue=$("input[name="+lsadvmileagectrl.GetInputName()+"]").val();

					$("input[name="+lsadvmileagectrl.GetInputName()+"]").parent().append(expvalue);

					//css({"position":"absolute","margin-top": "40px","margin-left": "-2px",'color':'red'});
					var lastactvalue=$("input[name="+lslastsctctrl.GetInputName()+"]").val();
					$("input[name="+lslastsctctrl.GetInputName()+"]").parent().addClass('Last_Actvty').append(lastactvalue).css("margin"," -22px 0px 0px");

					var millonmilervalue=$("input[name="+lsmilmilerctrl.GetInputName()+"]").val();
					$("input[name="+lsmilmilerctrl.GetInputName()+"]").parent().append(millonmilervalue).css({"position":"absolute","margin-top": "39px",  "margin-left": "3px"});
					$("input[name="+lsadvmileagectrl.GetInputName()+"],input[name="+lslastsctctrl.GetInputName()+"],input[name="+lsmilmilerctrl.GetInputName()+"]").css("display","none");

				}, 50);	*/








				var pm = this.GetPM();
				var lsMaxEQM = 0;
				var lsMaxEQS = 0;
				var lsEQMPer = 0;
				var lsEQSPer = 0;
				var appletId = pm.Get("GetFullId");


				//var lsMemberId = "";
	      var lsMemberShipCount =0;



				//console.log("lsCurTierctrl"+lsCurTierctrl.GetInputName());
				var lscurTierNameval = this.GetPM().ExecuteMethod("GetFieldValue",lsCurTierctrl);
				var lscurEQMval  = 25; //this.GetPM().ExecuteMethod("GetFieldValue",lsEQMctrl);
				var lscurEQSval = this.GetPM().ExecuteMethod("GetFieldValue",lsEQSctrl);
				console.log(" After initalizing lscurEQMval to 25");
				var lsPoint6Valuectrlval = this.GetPM().ExecuteMethod("GetFieldValue",lsPoint6Valuectrl);
				console.log(" lsPoint6Valuectrlval " + lsPoint6Valuectrlval);
				var lsnextTier = "";
				var visible = false;
			$("[name='"+lsCurTierctrl.GetInputName()+"']").parent().hide();





console.log("Start of sliding code");
				/*770472:Sliding of AdvAccount Summery 25 mar */
		$('#'+appletId).addClass("custom_applet_class_accsumry");
		console.log("After adding the class accsmry");
		debugger;
			$("#ADV_Slide_Form_Label").closest('tr').find('.FormSection').append('<img class="down_arrow" src="images/custom/arrow_down_48px.png"/><img class="up_arrow" src="images/custom/arrow_up_48px.png"/>');
			console.log("1");
			$("#ADV_Slide_Form_Label").closest('tr').find('.FormSection').css({"background-color":"white","border-bottom":"none","text-align":"center"});
		 console.log("2");
		 $("#ADV_Slide_Form_Label").closest('tr').find('span').text("");
		 console.log("3");
			$('#'+appletId).addClass("custom_"+appletId);
			console.log("4");
			$('#'+appletId).css({'position':'relative','z-index':'99','width':'100%'});
			console.log("5");
			$('#s_'+appletId+'_div').css("height","330px");
			console.log("6");

			$("#ADV_Slide_Form_Label").closest("tr").nextAll().addClass("slider_part");
			console.log("7");

				$("#ADV_Slide_Form_Label").closest('tr').find('img').click(function(){
					console.log("8");
					$(".slider_part").animate({
						console.log("9");
                                          height: 'toggle',
                                          'max-height': '0px'
					});
					setTimeout(function(){
						console.log("10");
						if ($('.slider_part').is(':visible')){
console.log("11");
							$("#ADV_Slide_Form_Label").next().next().css("display","inline-block");
							$("#ADV_Slide_Form_Label").next().css("display","none");
							if($("#Slide_Label").parent().find(".up_arrow").css('display') == 'inline-block')
							{
								console.log("12");
								$("#Slide_Label").parent().find(".up_arrow").click();
							}

						}
						else{
							$("#ADV_Slide_Form_Label").next().css("display","inline-block");
							$("#ADV_Slide_Form_Label").next().next().css("display","none");
							console.log("13");


						}
					},500);

console.log("14");
console.log("Visible"+ visible);
					if (!visible){
						console.log("15");
				//if(viewname == "LOY Member Transactions View")
				//{
					if(lsMemberIdval != "")
					{
						console.log("16");
						console.log(" lsMemberIdval  "+lsMemberIdval);
						var oService1 = SiebelApp.S_App.GetService("Workflow Process Manager");
						var inprops1 = SiebelApp.S_App.NewPropertySet(); //initialize input property set
						var outprops1 = SiebelApp.S_App.NewPropertySet();
						inprops1.SetProperty("ProcessName","ADV CB Retrieve 500M Balance from SABRE");
						inprops1.SetProperty("Object Id",lsMemberIdval);
						inprops1.SetProperty("viewname",viewname);
						outprops1 = oService1.InvokeMethod("RunProcess", inprops1);
						var ADVUpgradeFlag = outprops1.GetChildByType("ResultSet").GetProperty("ADVUpgradeFlag");
						console.log(" After Calling the WF");
						if(ADVUpgradeFlag == "N")
						{
							console.log("11 error");
							alert("There was an error retrieving the 500m UPGRADE balance for this account. The current balance may be retrieved in SABRE, if needed.");
						}
					}
				//}

							visible = true;

console.log("17");

						var width = $(window).width(), height = $(window).height();

						if ((width <= 1400)) {
							$(".expiryname").css("margin-left","-14%");
							$("#expvaluerem").css("margin-left","-14%");
							$(".lastactivityname").css("margin-left","-14%");
							$("#lastactvaluerem").css("margin-left","-14%");
							$(".millonmilername, #millonmilervaluerem").css("margin-left","-14%");

						} else {
							$(".expiryname").css("margin-left","1.5%");
							$("#expvaluerem").css("margin-left","1.5%");
							$(".lastactivityname").css("margin-left","1.5%");
							$("#lastactvaluerem").css("margin-left","1.5%");
							$(".millonmilername, #millonmilervaluerem").css("margin-left","1.5%");
						}


					}else{

						visible = false;

							$(".expiryname").css("margin-left","0%");
							$("#expvaluerem").css("margin-left","0%");
							$(".lastactivityname").css("margin-left","0%");
							$("#lastactvaluerem").css("margin-left","0%");
							$(".millonmilername, #millonmilervaluerem").css("margin-left","0%");
					}



				});

				$(".siebui-icon-advexpiredmiles").click(function(){
console.log("19");
				//sumanth:#11042 Expired Miles button to autoexpand Summary widget
				if($('.custom_applet_class_accsumry .down_arrow').is(':visible'))
					{
						 console.log("18");
						 $("#ADV_Slide_Form_Label").next().click();
					}

				});
			/*770472:Sliding of AdvAccount Summery End */

            }
            return AdvAccntSumryApltPR;
        } ());
        return "SiebelAppFacade.AdvAccntSumryApltPR";
    });

}