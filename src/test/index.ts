// import { ApiClient } from "../index";

import { TextMagic } from "../../dist/index.js";
import fs from "fs";

const run = async () => {
    const client = new TextMagic("ashleybailey", "OHnSNeMEGsuArep8KyrecocKDugrok");

    client.postUserAvatar({
        image: fs.readFileSync(__dirname + "/test.jpg"),
    })
}

run();