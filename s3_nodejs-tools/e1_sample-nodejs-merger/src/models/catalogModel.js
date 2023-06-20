const { asyncForEach } = require('../utils/asyncForEach')

class CatalogModel {
    constructor() {
        this.products = []
    }

    async checkExistence(productData) {
        await asyncForEach(this.products, async (product) => {
            await asyncForEach(product.Barcodes, (barcode) => {
                if (productData.Barcodes.includes(barcode)) {
                    return true
                }
            })
        })
        return false
    }

    async addProduct(productData) {
        if (!(await this.checkExistence(productData))) {
            this.products.push(productData)
        }
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

            await this.addProduct(productData)
        })

        return this.products
    }
}

module.exports = CatalogModel
