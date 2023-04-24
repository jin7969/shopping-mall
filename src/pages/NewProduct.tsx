import { useState } from "react";

interface ProductData {
  title: string;
  price: string;
  category: string;
  description: string;
  options: string;
}

function NewProduct() {
  const [product, setProduct] = useState<ProductData>({
    title: "",
    price: "",
    category: "",
    description: "",
    options: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "file") {
      if (files?.length === 0) return;

      setFile(files && files[0]);
      console.log(files);
      return;
    }

    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <section className="flex justify-center items-center">
      <div>
        <h2 className="text-center text-2xl font-bold my-4">
          새로운 제품 등록
        </h2>
        {success && <p className="my-2">✅ {success}</p>}
        {file && (
          <img
            className="w-96 rounded-xl"
            src={URL.createObjectURL(file)}
            alt="local file"
          />
        )}
      </div>
      <form className="flex flex-col px-12" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          value={product.title ?? ""}
          placeholder="제품명"
          required
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={product.price ?? ""}
          placeholder="가격"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={product.category ?? ""}
          placeholder="카테고리"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={product.description ?? ""}
          placeholder="제품 설명"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="options"
          value={product.options ?? ""}
          placeholder="콤마(,)로 구분 / ex) S,M,L"
          required
          onChange={handleChange}
        />
        <button disabled={isUploading}>
          {isUploading ? "업로드중..." : "제품 등록하기"}
        </button>
      </form>
    </section>
  );
}

export default NewProduct;
