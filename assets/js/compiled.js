this["DigitalEnclave"] = this["DigitalEnclave"] || {};
this["DigitalEnclave"]["templates"] = this["DigitalEnclave"]["templates"] || {};

Handlebars.registerPartial("carouselsvg", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<svg>\r\n	<line class=\"lt\" x1=\"0\" y1=\"0\" x2=\"45%\" y2=\"0\"/>\r\n	<line class=\"ll\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100%\"/>\r\n	<line class=\"lb\" x1=\"0\" y1=\"100%\" x2=\"20%\" y2=\"100%\"/>\r\n	<line class=\"rt\" x1=\"80%\" y1=\"0\" x2=\"100%\" y2=\"0\"/>\r\n	<line class=\"rr\" x1=\"100%\" y1=\"0\" x2=\"100%\" y2=\"100%\"/>\r\n	<line class=\"rb\" x1=\"55%\" y1=\"100%\" x2=\"100%\" y2=\"100%\"/>\r\n</svg>";
},"useData":true}));

this["DigitalEnclave"]["templates"]["carouselSlides"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "			<div class=\"feature\">\r\n				<div class=\"slide-title\">\r\n					<div class=\"title-wrap\">\r\n						<div>\r\n							"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n						</div>\r\n					</div>\r\n				</div>\r\n"
    + ((stack1 = container.invokePartial(partials.carouselsvg,depth0,{"name":"carouselsvg","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "			</div>\r\n			<div class=\"caption\">\r\n				<div class=\"content\">\r\n					"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\r\n				</div>\r\n				<div class=\"progress\"></div>\r\n			</div>\r\n     	</div><!-- slide end -->\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"slide active in\"><!-- slide start active in-->\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<div class=\"slide\"><!-- slide start active in-->\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(data && data.first),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "			<li class=\"active\"></li>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "			<li class=\"\"></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"slides\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div><!-- sliders wrapper end -->\r\n\r\n<ul class=\"indicators\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.slides : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"usePartial":true,"useData":true});

this["DigitalEnclave"]["templates"]["clientsList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "	<li class=\"client-name\">\r\n		<sup>0"
    + alias3((helpers.counter || (depth0 && depth0.counter) || alias2).call(alias1,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + "</sup> "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n	</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.clients : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["DigitalEnclave"]["templates"]["productsList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(data && data.first),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "		<li class=\"product-title active\"><a href=\"product.html#"
    + alias2(alias1(depth0, depth0))
    + "\" data-img=\""
    + alias2((helpers.counter || (depth0 && depth0.counter) || alias4).call(alias3,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + "\"><span><sup class=\"sup\">0"
    + alias2((helpers.counter || (depth0 && depth0.counter) || alias4).call(alias3,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + "</sup> "
    + alias2(alias1(depth0, depth0))
    + "</span></a></li>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "		<li class=\"product-title\"><a href=\"product.html#"
    + alias2(alias1(depth0, depth0))
    + "\" data-img=\""
    + alias2((helpers.counter || (depth0 && depth0.counter) || alias4).call(alias3,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + "\"><span><sup class=\"sup\">0"
    + alias2((helpers.counter || (depth0 && depth0.counter) || alias4).call(alias3,(data && data.index),{"name":"counter","hash":{},"data":data}))
    + "</sup> "
    + alias2(alias1(depth0, depth0))
    + "</span></a></li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.products : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["DigitalEnclave"]["templates"]["supportList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li class=\"list-item\">\r\n		<div class=\"sub-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n		<div class=\"description\">\r\n			<div>"
    + alias4(((helper = (helper = helpers.support || (depth0 != null ? depth0.support : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"support","hash":{},"data":data}) : helper)))
    + "</div>\r\n			<div>"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</div>\r\n			<div>"
    + alias4(((helper = (helper = helpers.contact || (depth0 != null ? depth0.contact : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contact","hash":{},"data":data}) : helper)))
    + "</div>\r\n		</div>\r\n	</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.supportservices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});