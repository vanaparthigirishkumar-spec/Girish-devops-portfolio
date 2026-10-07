#!/usr/bin/env python3
"""Prepare the optional talking-video hero assets.

Requires ffmpeg and ffprobe on PATH. Place the generated intro video at
public/hero/intro.mp4. This script creates a normalized MP4, a WebM copy and
simple stills. The portfolio itself works without a video and falls back to
public/portrait-3d.png until intro.mp4 is added.
"""
from pathlib import Path
import subprocess, shutil, sys

ROOT = Path(__file__).resolve().parents[1]
HERO = ROOT / "public" / "hero"
INPUT = HERO / "intro.mp4"
NORMALIZED = HERO / "hero.mp4"
WEBM = HERO / "hero.webm"


def run(cmd):
    print("$", " ".join(cmd))
    subprocess.run(cmd, check=True)


def main():
    if not INPUT.exists():
        print("No public/hero/intro.mp4 found. Add the generated talking video first.")
        return 0
    if not shutil.which("ffmpeg"):
        print("ffmpeg is required.", file=sys.stderr)
        return 1

    run([
        "ffmpeg", "-y", "-i", str(INPUT),
        "-vf", "colorlevels=rimax=0.98:gimax=0.98:bimax=0.98,scale=768:-2:force_original_aspect_ratio=decrease",
        "-c:v", "libx264", "-crf", "24", "-preset", "slow", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", str(NORMALIZED)
    ])
    run([
        "ffmpeg", "-y", "-i", str(NORMALIZED),
        "-c:v", "libvpx-vp9", "-crf", "36", "-b:v", "0",
        "-c:a", "libopus", "-b:a", "80k", str(WEBM)
    ])
    print("Hero assets created.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
