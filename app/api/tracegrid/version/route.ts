import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  console.log(
    "📋 Tracegrid version check requested at",
    new Date().toISOString(),
  );

  // Get actual APK file size
  let fileSizeBytes = 0;
  let fileSizeMB = "0 MB";

  try {
    const apkPath = path.join(
      process.cwd(),
      "public",
      "tracegrid",
      "app-release.apk",
    );
    if (fs.existsSync(apkPath)) {
      const stats = fs.statSync(apkPath);
      fileSizeBytes = stats.size;
      fileSizeMB = `${(fileSizeBytes / (1024 * 1024)).toFixed(2)} MB`;
      console.log(`📦 APK file size: ${fileSizeMB} (${fileSizeBytes} bytes)`);
    } else {
      console.warn("⚠️  APK file not found, using default size");
    }
  } catch (error) {
    console.error("❌ Error reading APK file size:", error);
  }

  const versionData = {
    version: "1.0.1",
    versionCode: 2,
    releaseDate: "2025-01-29",
    downloadUrl: "https://muhtadi.dev/api/tracegrid/download",
    changelog: ["Initial release", "Basic functionality implemented"],
    minAndroidVersion: "8.0",
    fileSize: fileSizeMB,
    fileSizeBytes: fileSizeBytes,
    md5: "",
    sha256: "",
    mandatory: false,
    releaseNotes: {
      en: "Initial release with core features",
      id: "Rilis awal dengan fitur utama",
    },
  };

  return NextResponse.json(versionData, {
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
}
