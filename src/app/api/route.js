import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import _ from "lodash";

const dataDirectory = path.join(process.cwd(), "public");

// read all public assets (sounds, images) and genrate proper data
export async function GET() {
  const soundNames = fs.readdirSync(path.join(dataDirectory, "sounds"));
  const imageNames = fs.readdirSync(path.join(dataDirectory, "images"));
  const labels = soundNames.map((el) => _.capitalize(el.split(".")[0]));
  const data = _.zipWith(
    labels,
    soundNames,
    imageNames,
    (label, soundPath, imagePath) => ({ label, soundPath, imagePath })
  );
  return NextResponse.json({
    data,
  });
}
