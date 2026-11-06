export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { password } = req.body || {};

    if (!process.env.ADULT_PASS || password !== process.env.ADULT_PASS) {
        return res.status(403).json({
            error: "18+ PASS REQUIRED"
        });
    }

    // We'll add the protected image here in the next step.
}
