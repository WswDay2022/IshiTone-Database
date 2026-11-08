import { writeFile, mkdir, readFile } from "node:fs/promises";
import { dirname } from "node:path"

const OUTPUT = "public/index.html";

async function main() {
    const oldData = JSON.parse(await readFile(OUTPUT, "utf8"));
    const newData = {
        "lastUpdated": new Date(Date.now() + 8 * 3600 * 1000).toISOString().replace(/\.\d{3}Z$/, "+08:00"),
        "version": (Number.parseInt(oldData.version) || 0) + 1,
    };
    await mkdir(dirname(OUTPUT), { recursive: true });
    await writeFile(OUTPUT, JSON.stringify(newData, null, 2) + "\n", "utf8");
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
