function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {

	 var ds = DatasetBuilder.newDataset();
	 
	 ds.addColumn("Produto");
	 ds.addColumn("Valor");
	 
	 ds.addRow(new Array("Teclado",3000));
	 ds.addRow(new Array("Carro",2000));
	 ds.addRow(new Array("Ps4",500));
	 ds.addRow(new Array("Casa",20000));
	 
	 
	 return ds;

}function onMobileSync(user) {

}