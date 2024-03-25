$("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo('#slideshow');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 5000);

for (var i = 0; i < maxindex; i++) {
    $('.slideshow-nav').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
}

(function () {
var
    filters = {
    make: null,
    model: null,
    price: null,
    town: null
    };

function updateFilters() {
    $('.car-list-row').hide().filter(function () {
    var
        self = $(this),
        result = true;

    Object.keys(filters).forEach(function (filter) {
        if (filters[filter] && (filters[filter] != 'None') && (filters[filter] != 'Any')) {
        result = result && filters[filter] === self.data(filter);
        }
    });

    return result;
    }).show();
}

function bindDropdownFilters() {
    Object.keys(filters).forEach(function (filterName) {
    $('#' + filterName + '-filter').on('change', function () {
        filters[filterName] = this.value;
        updateFilters();
    });
    });
}

bindDropdownFilters();
});