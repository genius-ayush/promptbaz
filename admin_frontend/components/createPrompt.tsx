'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreatePrompt = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    promptText: "",
    modelUsed: "",
    steps: "",
    aspectRatio: "",
    seed: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return alert("Image is required");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("promptText", form.promptText);
      formData.append("modelUsed", form.modelUsed);
      formData.append("steps", JSON.stringify(form.steps.split("\n")));
      formData.append("aspectRatio", form.aspectRatio);
      formData.append("seed", form.seed);
      formData.append("image", image);
    console.log(formData) ;
      const res = await fetch(
        "http://localhost:5000/prompts",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      

      if (!res.ok) throw new Error("Failed to create prompt");

      alert("Prompt created successfully!");
      setForm({
        title: "",
        promptText: "",
        modelUsed: "",
        steps: "",
        aspectRatio: "",
        seed: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] w-full">
      <div className="w-full max-w-md border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Prompt
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <Textarea
            name="promptText"
            placeholder="Prompt text"
            value={form.promptText}
            onChange={handleChange}
            required
          />

          <Input
            name="modelUsed"
            placeholder="Model used"
            value={form.modelUsed}
            onChange={handleChange}
          />

          <Textarea
            name="steps"
            placeholder="Steps (one per line)"
            value={form.steps}
            onChange={handleChange}
          />

          <Input
            name="aspectRatio"
            placeholder="Aspect ratio (e.g. 3:4)"
            value={form.aspectRatio}
            onChange={handleChange}
          />

          <Input
            name="seed"
            placeholder="Seed"
            value={form.seed}
            onChange={handleChange}
          />

          {/* Image Upload */}
          <div className="border border-dashed rounded-lg p-4 text-center">
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-4 rounded-md max-h-48 mx-auto"
              />
            )}
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Prompt"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePrompt;
