

if( typeof( SiebelAppFacade.Accsecurityimagepr) === "undefined" ){

 SiebelJS.Namespace( "SiebelAppFacade.Accsecurityimagepr" );
 define("siebel/custom/accsecurityimagepr", ["siebel/phyrenderer"], function () {

        SiebelAppFacade.Accsecurityimagepr = ( function(){
            function Accsecurityimagepr( pm ){
                SiebelAppFacade.Accsecurityimagepr.superclass.constructor.call( this, pm );
            }
            SiebelJS.Extend( Accsecurityimagepr, SiebelAppFacade.PhysicalRenderer );
            Accsecurityimagepr.prototype.Init = function () {
                SiebelAppFacade.Accsecurityimagepr.superclass.Init.call(this);


            };

	Accsecurityimagepr.prototype.ShowUI = function () {
	 console.log(" Enter Accsecurityimagepr");
	var pm;
var as_appletId;
var appletId_div;
		// JDM: Checking types so we don't re-init for every view change
		if (typeof(pm) === "undefined") pm = this.GetPM();

		if (typeof(as_appletId) === "undefined") as_appletId = pm.Get("GetFullId");

		if (typeof(appletId_div) === "undefined") appletId_div = "s_" + as_appletId + "_div";

		//var controls = pm.Get("GetControls");
		//var controlAddress = controls[ "ADV Address" ];

				SiebelAppFacade.Accsecurityimagepr.superclass.ShowUI.apply(this, arguments);
			var slideLabel = $("#Slide_Label");

				/*770472:sumanth Sliding of AdvAccount Summery. 13st April */

			slideLabel.closest('tr').find('.FormSection').append('<img class="down_arrow" src="images/custom/arrow_down_48px.png"/><img class="up_arrow" src="images/custom/arrow_up_48px.png"/>');
			slideLabel.closest('tr').find('.FormSection').css({"background-color":"white","border-bottom":"none","text-align":"center"});
		 	slideLabel.closest('tr').find('span').text("");
			$('#'+as_appletId).addClass("custom_applet_class");

			 $('#'+as_appletId).css({'position':'relative','z-index':'999','width':'100%','height':'292px'});
			$('#'+appletId_div).css({"position":"absolute","width":"99%"});
			/* $('#'+"s_"+appletId+'_div').css("height","97%"); */
			/*  slideLabel.closest("td").css("height":"45px");  */
			slideLabel.closest("tr").nextAll().addClass("slider_part_1");
				slideLabel.closest('tr').find('img').click(function(){
					$(".slider_part_1").animate({
						height: 'toggle', 'max-height': '0px'
					});
					setTimeout(function(){
						if ($('.slider_part_1').is(':visible')){

							slideLabel.next().next().css("display","inline-block");
							slideLabel.next().css("display","none");
							if($("#ADV_Slide_Form_Label").parent().find(".up_arrow").css('display') == 'inline-block')
							{
								$("#ADV_Slide_Form_Label").parent().find(".up_arrow").click();
							}
						}
						else{
							slideLabel.next().css("display","inline-block");
							slideLabel.next().next().css("display","none");
						}
					},500);
				});
				setTimeout(function(){
					$('.custom_applet_class tr:nth-child(4) td:nth-child(2) span').html(function(i,h){

							return h.replace(/&nbsp;/g,'');

						});
					},500);

				$(".siebui-icon-adv_calcmilestoreactivate").click(function(){
					$("#ADV_Slide_Form_Label").parent().find(".down_arrow").click();
				});
				console.log("Accsecurityimagepr");
				/*770472:sumanth Sliding of AdvAccount Summery. 13st April End */
				    console.log(" Exit Accsecurityimagepr");
            }
            return Accsecurityimagepr;

        }


 ());
        return "SiebelAppFacade.Accsecurityimagepr";
    });


}
