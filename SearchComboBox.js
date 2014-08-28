
if (!Carlsirce.component)
    Ext.namespace('Carlsirce.component');

Carlsirce.component.SearchComboBox = Ext.extend(Ext.form.ComboBox, {
    minChars: 2,
    listWidth: 300,
    onLoad: function () {
        if (this.store.getCount() <= 0) {
            this.selectEntity = undefined;
            this.selectEntityId = undefined;
        }
        Carlsirce.component.EntitySearch.SearchComboBox.superclass.onLoad.call(this);
    },
    onSelect: function (record) {
        this.selectEntity = record;
        this.selectEntityId = record.get('id');

        Carlsirce.component.EntitySearch.SearchComboBox.superclass.onSelect.call(this, record);
    },
    getSelectEntityId: function () {
        return Carlsirce.component.EntitySearch.SearchComboBox.superclass.getValue.call(this) != '' ? this.selectEntityId : undefined;
    },
    getEntity: function () {
        return Carlsirce.component.EntitySearch.SearchComboBox.superclass.getValue.call(this) != '' ? this.selectEntity : undefined;
    },
    getValue: function () {
        return this.getSelectEntityId();
    },
    getText: function () {
        return Carlsirce.component.EntityComboBox.superclass.getValue.call(this);
    },
    validator: function () {
        if (this.getSelectEntityId() == undefined || this.getSelectEntityId() == null)
            return false;
        else
            return true;
    },
    setSelectEntityId: function (value) {
        this.selectEntityId = value;
    }
})
