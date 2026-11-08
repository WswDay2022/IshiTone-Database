import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path"

const OUTPUT = "public/index.html";

async function main() {
    const data = {
        "dog": "?"
    }
    await mkdir(dirname(OUTPUT), { recursive: true });
    await writeFile(OUTPUT, JSON.stringify(data, null, 2) + "\n", "utf8");
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});