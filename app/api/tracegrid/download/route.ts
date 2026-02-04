import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const clientIP =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";

  console.log("=".repeat(80));
  console.log("📥 TRACEGRID APK DOWNLOAD REQUEST");
  console.log("=".repeat(80));
  console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
  console.log(`🌐 Client IP: ${clientIP}`);
  console.log(`📱 User Agent: ${userAgent}`);
  console.log(`🔗 Request URL: ${request.url}`);
  console.log(`📍 Request Method: ${request.method}`);

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "tracegrid",
      "app-release.apk",
    );

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log("❌ ERROR: APK file not found");
      console.log(`📂 Attempted path: ${filePath}`);
      console.log("=".repeat(80));
      return NextResponse.json(
        { error: "APK file not found" },
        { status: 404 },
      );
    }

    // Get file stats
    const stats = fs.statSync(filePath);
    const fileSize = stats.size;
    const fileSizeInMB = (fileSize / (1024 * 1024)).toFixed(2);

    console.log(`📦 File found: app-release.apk`);
    console.log(`📊 File size: ${fileSizeInMB} MB (${fileSize} bytes)`);
    console.log(`📅 Last modified: ${stats.mtime.toISOString()}`);

    // Read file
    const fileBuffer = fs.readFileSync(filePath);

    console.log("✅ File read successfully");
    console.log("🚀 Starting file transfer...");

    const response = new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition":
          'attachment; filename="tracegrid-app-release.apk"',
        "Content-Length": fileSize.toString(),
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    const speedMBps = (parseFloat(fileSizeInMB) / parseFloat(duration)).toFixed(
      2,
    );

    console.log("✅ DOWNLOAD COMPLETED SUCCESSFULLY");
    console.log(`⏱️  Duration: ${duration} seconds`);
    console.log(`⚡ Average speed: ${speedMBps} MB/s`);
    console.log(`📤 Total bytes sent: ${fileSize}`);
    console.log("=".repeat(80));
    console.log("");

    return response;
  } catch (error) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log("❌ DOWNLOAD FAILED");
    console.log(`⏱️  Duration before failure: ${duration} seconds`);
    console.log(
      `🔴 Error: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
    console.log(`📚 Stack trace:`);
    console.log(error);
    console.log("=".repeat(80));
    console.log("");

    return NextResponse.json(
      { error: "Failed to download APK file" },
      { status: 500 },
    );
  }
}
