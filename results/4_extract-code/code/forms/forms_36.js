var widgets = require('forms').widgets;

var my_form = forms.create({
    title: fields.string({
        required: true,
        widget: widgets.text({ classes: ['input-with-feedback'] }),
        errorAfterField: true,
        cssClasses: {
            label: ['control-label col col-lg-3']
        }
    }),
    description: fields.string({
        errorAfterField: true,
        widget: widgets.text({ classes: ['input-with-feedback'] }),
        cssClasses: {
            label: ['control-label col col-lg-3']
        }
    })
});

var bootstrapField = function (name, object) {
    if (!Array.isArray(object.widget.classes)) { object.widget.classes = []; }
    if (object.widget.classes.indexOf('form-control') === -1) {
        object.widget.classes.push('form-control');
    }

    var label = object.labelHTML(name);
    var error = object.error ? '<div class="alert alert-error help-block">' + object.error + '</div>' : '';

    var validationclass = object.value && !object.error ? 'has-success' : '';
    validationclass = object.error ? 'has-error' : validationclass;

    var widget = object.widget.toHTML(name, object);
    return '<div class="form-group ' + validationclass + '">' + label + widget + error + '</div>';
};
