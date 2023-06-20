const { asyncForEach } = require('../utils/asyncForEach')

class CatalogModel {
    constructor() {
        this.products = []
    }

    async addProduct(productData) {
        console.log('productData', productData)
    }

    async addProducts(catalogData) {
        await asyncForEach(catalogData.catalog.data, async (catalogRow) => {
            const productData = {}

            productData.SKU = catalogRow.SKU
            productData.Description = catalogRow.Description

            productData.Barcodes = []
            await asyncForEach(
                catalogData.barcodes.data,
                async (barcodeRow) => {
                    if (barcodeRow.SKU === catalogRow.SKU) {
                        productData.Barcodes.push(barcodeRow.Barcode)
                    }

                    productData.SupplierID = barcodeRow.SupplierID
                }
            )

            productData.supplierName = catalogData.suppliers.data.find(
                (supplierRow) => {
                    return (supplierRow.ID = productData.SupplierID)
                }
            ).Name

            this.addProduct(productData)
        })
    }
}

module.exports = CatalogModel
