import { writeFile, mkdir, readFile } from "node:fs/promises";
import { dirname } from "node:path"

const OUTPUT = "public/index.html";

async function main() {
    const oldData = await readFile(OUTPUT, "utf8");
    const newData = {
        "lastUpdated": Date.now(),
        "version": (Number.parseInt(oldData["version"]) ?? 0) + 1,
        ...oldData
    };
    await mkdir(dirname(OUTPUT), { recursive: true });
    await writeFile(OUTPUT, JSON.stringify(newData, null, 2) + "\n", "utf8");
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
