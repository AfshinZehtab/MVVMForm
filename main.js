$(function()
{

	function showMessage(kind, getMessage)
	{
		if (kind == "error")
		{
			kind = "#f96969";
		}
		else if (kind == "success")
		{
			kind = "#c2ffc2";
		}

		if ($("body #message").length == 0)
		{
			$("body").append(`<div id="message"></div>`);
			$("#message").css(
			{
				position: "absolute",
			    background: "#c2ffc2",
			    padding: "20px 50px",
			    color: "#000",
			    top: "5px",
			    left: "-9995px",
			    display: "none",
			    boxShadow: "0px 0px 4px #000"
			});
		}

		var message = $("#message");

		message.html(getMessage);
		message.css({display: "block", background: kind});
		message.animate({left:"+=10000px", opacity:"show"}, 500).delay(3000);
		message.animate({left:"-=10000px", opacity:"show"}, 500);
		setTimeout(function(){
			message.remove();
			message.css({display: "none"});
		}, 4000);
	}

	$user = []

    var viewModelFormular = kendo.observable(
    {
    	firstName: "",
    	lastName: "",
    	str1: "",
    	str2: "",
    	city: "",
    	state: "",
    	zip: "",
    	countries: 
    	[
        	{ name: "--Select a country--", value: "select" },
        	{name: "Afghanistan", value: "afghanistan"}, 
			{name: "Albania", value: "albania"}, 
			{name: "Algeria", value: "algeria"}, 
			{name: "American Samoa", value: "americanSamoa"}, 
			{name: "AndorrA", value: "andorrA"}, 
			{name: "Angola", value: "angola"}, 
			{name: "Anguilla", value: "anguilla"}, 
			{name: "Antarctica", value: "antarctica"}, 
			{name: "Antigua and Barbuda", value: "antiguaBarbuda"}, 
			{name: "Argentina", value: "argentina"}, 
			{name: "Armenia", value: "armenia"}, 
			{name: "Aruba", value: "aruba"}, 
			{name: "Australia", value: "australia"}, 
			{name: "Austria", value: "austria"}, 
			{name: "Azerbaijan", value: "azerbaijan"}, 
			{name: "Bahamas", value: "bahamas"}, 
			{name: "Bahrain", value: "bahrain"}, 
			{name: "Bangladesh", value: "bangladesh"}, 
			{name: "Barbados", value: "barbados"}, 
			{name: "Belarus", value: "belarus"}, 
			{name: "Belgium", value: "belgium"}, 
			{name: "Belize", value: "belize"}, 
			{name: "Benin", value: "benin"}, 
			{name: "Bermuda", value: "bermuda"}, 
			{name: "Bhutan", value: "bhutan"}, 
			{name: "Bolivia", value: "bolivia"}, 
			{name: "Bosnia and Herzegovina", value: "bosniaHerzegovina"}, 
			{name: "Botswana", value: "botswana"}, 
			{name: "Bouvet Island", value: "bouvetIsland"}, 
			{name: "Brazil", value: "brazil"}, 
			{name: "British Indian Ocean Territory", value: "britishIndianOceanTerritory"}, 
			{name: "Brunei Darussalam", value: "bruneiDarussalam"}, 
			{name: "Bulgaria", value: "bulgaria"}, 
			{name: "Burkina Faso", value: "burkinaFaso"}, 
			{name: "Burundi", value: "burundi"}, 
			{name: "Cambodia", value: "cambodia"}, 
			{name: "Cameroon", value: "cameroon"}, 
			{name: "Canada", value: "canada"}, 
			{name: "Cape Verde", value: "capeVerde"}, 
			{name: "Cayman Islands", value: "caymanIslands"}, 
			{name: "Chad", value: "chad"}, 
			{name: "Chile", value: "chile"}, 
			{name: "China", value: "china"}, 
			{name: "Colombia", value: "colombia"}, 
			{name: "Comoros", value: "comoros"}, 
			{name: "Congo", value: "congo"}, 
			{name: "Croatia", value: "croatia"}, 
			{name: "Cuba", value: "cuba"}, 
			{name: "Cyprus", value: "cyprus"}, 
			{name: "Czech Republic", value: "czech"}, 
			{name: "Denmark", value: "denmark"}, 
			{name: "Djibouti", value: "djibouti"}, 
			{name: "Dominica", value: "dominica"}, 
			{name: "Ecuador", value: "ecuador"}, 
			{name: "Egypt", value: "egypt"}, 
			{name: "Gambia", value: "gambia"}, 
			{name: "Georgia", value: "georgia"}, 
			{name: "Germany", value: "germany"}, 
			{name: "Ghana", value: "ghana"}, 
			{name: "Gibraltar", value: "gibraltar"}, 
			{name: "Greece", value: "greece"}, 
			{name: "Greenland", value: "greenland"}, 
			{name: "Grenada", value: "grenada"}, 
			{name: "Honduras", value: "honduras"}, 
			{name: "Hong Kong", value: "hongKong"}, 
			{name: "Hungary", value: "hungary"}, 
			{name: "Iceland", value: "iceland"}, 
			{name: "India", value: "india"}, 
			{name: "Indonesia", value: "indonesia"}, 
			{name: "Iran, Islamic Republic Of Iran", value: "iran"}, 
			{name: "Iraq", value: "iraq"}, 
			{name: "Ireland", value: "ireland"}, 
			{name: "Italy", value: "italy"}, 
			{name: "Jamaica", value: "jamaica"}, 
			{name: "Japan", value: "japan"}, 
			{name: "Jersey", value: "jersey"}, 
			{name: "Jordan", value: "jordan"}, 
			{name: "Kazakhstan", value: "kazakhstan"}, 
			{name: "Kenya", value: "kenya"}, 
			{name: "Kiribati", value: "kiribati"}, 
			{name: "Korea", value: "korea"}, 
			{name: "Kuwait", value: "kuwait"}
    	],
    	country: "select",
    	userName: "",
    	passWord: "",
    	isVisible: true,
    	isEnabled: true,
    	confirmed: false,
    	register: function(e)
    	{
    		e.preventDefault();

    		if (kendoValidator.validate())
    		{
    			this.set("confirmed", true);
    			this.set("userName", $("#kendoGrid form input[name='userName']").val().toLowerCase());
    			this.set("passWord", $("#kendoGrid form input[name='passWord']").val());
    			$user = 
    			{
					userName: $("#kendoGrid form input[name='userName']").val().toLowerCase(),
					passWord: $("#kendoGrid form input[name='passWord']").val()
    			};
    			console.log($user);
    			showMessage("success" ,"Successfully created!");
    			
    			$("#kendoGrid").remove();
    			$("#signin").css({
    				display: 'block',
    			});
    		}
    		else
    		{
    			showMessage("error" ,"Please fill the required fields!");
    		}
    	},
    	passValidate: function()
    	{
    		var required_password = $("#kendoGrid .required.required_password").kendoValidator({
				errorTemplate: `<div class="passContain">
		           					<h3>Password must contain the following:</h3>
						            <p id="special" class="invalid">A <b>Special</b> letter</p>
						            <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
						            <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
						            <p id="number" class="invalid">A <b>number</b></p>
						            <p id="length" class="invalid">Minimum <b>8 characters</b></p>
		           				</div>`
			}).data("kendoValidator");

			$("#kendoGrid .required input[name='passWord']").keyup(function()
			{
				$(".passContain").css("display", "block");
				var myInput = $(this),
			    	special = $("#special"),
			    	letter = $("#letter"),
			    	capital = $("#capital"),
			    	number = $("#number"),
			    	length = $("#length");

			    myInput.keyup(function() {
			    	var specialChar = /[!@#$%^&*]/g;
			        if(myInput.val().match(specialChar)) 
			        {
			            special.removeClass("invalid");
			            special.addClass("valid");
			        } 
			        else 
			        {
			            special.removeClass("valid");
			            special.addClass("invalid");
			        }

			        var lowerCaseLetters = /[a-z]/g;
			        if(myInput.val().match(lowerCaseLetters)) 
			        {
			            letter.removeClass("invalid");
			            letter.addClass("valid");
			        } 
			        else 
			        {
			            letter.removeClass("valid");
			            letter.addClass("invalid");
			        }

			        var upperCaseLetters = /[A-Z]/g;
			        if(myInput.val().match(upperCaseLetters)) 
			        {
			            capital.removeClass("invalid");
			            capital.addClass("valid");
			        } 
			        else 
			        {
			            capital.removeClass("valid");
			            capital.addClass("invalid");
			        }

			        var numbers = /[0-9]/g;
			        if(myInput.val().match(numbers)) 
			        {
			            number.removeClass("invalid");
			            number.addClass("valid");
			        } 
			        else 
			        {
			            number.removeClass("valid");
			            number.addClass("invalid");
			        }

			        if(myInput.val().length >= 8) 
			        {
			            length.removeClass("invalid");
			            length.addClass("valid");
			        } 
			        else 
			        {
			            length.removeClass("valid");
			            length.addClass("invalid");
			        }

			        if ($(".passContain p.valid").length == $(".passContain p").length) 
				    {
				    	$(".passContain").css("display", "none");
				    }

			    });
			});
    	},
    	userValidate: function()
    	{
    		$("#kendoGrid .required input[name='userName']").keyup(function()
			{
				var userInput = $(this);
    			if(userInput.val().length >= 8) 
		        {
		            $("span[data-for='userName']").css(
		            {
		            	display: "none"
		            });
		        } 
		        else 
		        {
		            $("span[data-for='userName']").css("display", "block");
		        }
		    });
    	},
    	fnameValidate: function()
    	{
    		$("#kendoGrid .required input[name='firstName']").keyup(function()
			{

				var userInput = $(this);
    			if(userInput.val().length > 0) 
		        {
		            $("span[data-for='firstName']").css("display", "none");
		        } 
		        else 
		        {
		            $("span[data-for='firstName']").css("display", "block");
		        }
		    });
    	},
    	lnameValidate: function()
    	{
    		$("#kendoGrid .required input[name='lastName']").keyup(function()
			{
				var userInput = $(this);
    			if(userInput.val().length > 0) 
		        {
		            $("span[data-for='lastName']").css("display", "none");
		        } 
		        else 
		        {
		            $("span[data-for='lastName']").css("display", "block");
		        }
		    });
    	},
    	userInfo: function()
    	{
    		showMessage("success", "Everthings is perfect!");
    		
			setTimeout(function()
			{
    			$("#user").fadeOut().delay(500);
			},3000);

    		setTimeout(function() {
			    location.reload();
			}, 4000);
    	},
    	userSave: function()
    	{
    		// $updatedInfo = {};

    		// if (this.get("firstName") != "")
    		// {
    		// 	$updatedInfo['First Name'] = this.get("firstName");
    		// }
    		// if (this.get("lastName") != "")
    		// {
    		// 	$updatedInfo['Last Name'] = this.get("lastName");
    		// }
    		// if (this.get("str1") != "")
    		// {
    		// 	$updatedInfo['Street Address'] = this.get("str1");
    		// }
    		// if (this.get("str2") != "")
    		// {
    		// 	$updatedInfo['Address Line 2'] = this.get("str2");
    		// }
    		// if (this.get("city") != "")
    		// {
    		// 	$updatedInfo['City'] = this.get("city");
    		// }
    		// if (this.get("state") != "")
    		// {
    		// 	$updatedInfo['State'] = this.get("state");
    		// }
    		// if (this.get("zip") != "")
    		// {
    		// 	$updatedInfo['Zip'] = this.get("zip");
    		// }
    		// if (this.get("country") != "")
    		// {
    		// 	$updatedInfo['Country'] = this.get("country");
    		// }

    		showMessage("success" ,`
    			Successfully updated!<br><br>
    			First Name: <strong>${this.get("firstName")}</strong><br>
    			Last Name: <strong>${this.get("lastName")}</strong><br>
				Street Address: <strong>${this.get("str1")}</strong><br>
				Address Line 2: <strong>${this.get("str2")}</strong><br>
				City: <strong>${this.get("city")}</strong><br>
				State: <strong>${this.get("state")}</strong><br>
				Zip: <strong>${this.get("zip")}</strong><br>
				Country: <strong>${this.get("country")}</strong>`
			);
    	}

    });

    kendo.bind($("#kendoGrid"), viewModelFormular);

    $("form").kendoValidator({
		validateOnBlur: false 
	});

  	kendoValidator = $("form").getKendoValidator();

	viewModelFormular.bind("change", function(e) {
		kendoValidator.validate();
	});

	var viewModelSignIn = kendo.observable(
	{
		userName: "",
		passWord: "",
		isVisible: true,
    	isEnabled: true,
    	confirmed: false,
    	signin: function(e)
    	{
    		e.preventDefault();

    		if (kendoValidatorSignIn.validate())
    		{
    			this.set("confirmed", true);

    			$getUsername = $("#signin form input[name='userName']").val().toLowerCase();
    			$getPassword = $("#signin form input[name='passWord']").val();

				if (($getUsername == $user['userName']) && ($getPassword == $user['passWord']))
				{
	    			showMessage("success" ,"Successfully Signed IN!");
	    			
	    			$("#signin").remove();
	    			$("#user").css({
	    				display: 'block',
	    			});
				}
				else
				{
					showMessage("error" ,"Your username or password is wrong, please try again!");
				}
    		}
    		else
    		{
    			showMessage("error" ,"You have to enter your username & password to sign in!");
    		}
    	}
	});

	kendo.bind($("#signin"), viewModelSignIn);

	kendoValidatorSignIn = $("#signin form").getKendoValidator();

	$("#signin form").kendoValidator({
		validateOnBlur: false 
	});

	viewModelSignIn.bind("change", function(e) {
		kendoValidator.validate();
	});

    kendo.bind($("#user"), viewModelFormular);

});