var rebate = document.getElementById("buyerPrice");
rebate.addEventListener("input", savingListener);

function numericFormat(a) {
  a = a.toString();
  a = a.split("");
  var count = 0;
  for(i = a.length - 1; i >= 0; i--) {
    count++;
    if(count % 3 == 0 && i != 0) {
      a.splice(i,0,",");
    };
    if (i == 0) {
      a.splice(i,0,"$");
    };
  };

  a.join("");
  return a;
};

function labelPosition(a) {
  var newPosition;
  var traveled;
  var inputSize = $("input").width();

    traveled = ((rebate.value - rebate.min)/(rebate.max - rebate.min));
 
  $("." + a + "StagnantLabel").html('<span class = "'+ a +'ValueMin">$200,000</span> <span class = "'+ a +'ValueMax" style = "margin-left:'+(inputSize - 150)+'px ">$2,000,000</span>');
  if (traveled * inputSize <= 100) {
    $("." + a + "ValueMin").addClass("fadeOuts");
    };
  if (traveled * inputSize >= 100) {
    $("." + a + "ValueMin").removeClass("fadeOuts");
    };
  if (traveled * inputSize >= inputSize - 100) {
    $("." + a + "ValueMax").addClass("fadeOuts");
  };
  if (traveled * inputSize <= inputSize - 100) {
    $("." + a + "ValueMax").removeClass("fadeOuts");
  }
  newPosition = Math.round((traveled * inputSize ) - ((93) * traveled));
  $("." + a + "PropertyPrice").html('<h4 class = "' + a + 'MobileLabel '+ a +'PropertyValue" style = "margin-left:' + newPosition + 'px">$1,100,000</h4>');
};
labelPosition("saller");
labelPosition("buyer");
labelPosition("default");
function sliderChange() {
  var value = this.value;
  var ownerSavings = Math.round((value * 0.06) - (value * 0.035));
  var buyerSavings = Math.round(value * 0.01);
  buyerSavings = numericFormat(buyerSavings);
  ownerSavings = numericFormat(ownerSavings);
  $(".buyerSavings").html(buyerSavings);
  $(".ownerSavings").html(ownerSavings);
  value = numericFormat(value);
  labelPosition("default");
  $(".defaultMobileLabel").html(value);
};
function savingListener() {
  var value = this.value;
  console.log(value);
  var ownerSavings = Math.round((value * 0.06) - (value * 0.035));

  ownerSavings = numericFormat(ownerSavings);

  $(".sallerSavings").html(ownerSavings);
  value = numericFormat(value);
  labelPosition("saller");
  $(".sallerPropertyValue").html(value);
};
function rebateListener() {
  var value = this.value;
  var buyerSavings = Math.round(value * 0.01);
  buyerSavings = numericFormat(buyerSavings);
  $(".buyerRebate").html(buyerSavings);
  value = numericFormat(value);
  labelPosition("buyer");
  $(".buyerPropertyValue").html(value);
};
