const PRODUCT_MODEL = require("../modules/producte.modle");

const findeByParcode = (req, res) => {
    const { Parcode } = req.body;
    PRODUCT_MODEL.findOne({ Parcode })
        .then((producte) => {
            if (!producte) {
                return res.state(404).jsone({
                    error: true,
                    message: "produte not founde",

                });
            }
            res.status(200).json({
                producte,
            })

        })
        .catch((e) => res.status(500).json({
            error: true,
            errorMessage: e.message
        }))

}
