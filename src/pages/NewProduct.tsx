import { useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";
import { addNewProduct } from "../api/firebase";
import { uploadImage } from "../api/uploader";

function NewProduct() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    options: "",
  });

  const handleChange = (e: React.ChangeEvent) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (name === "file") {
      if (files?.length === 0) return;
      setFile(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsUploading(true);
    uploadImage(file as File) //
      .then((url) => {
        addNewProduct(product, url) //
          .then(() => {
            setSuccess("상품이 추가되었습니다.");
            setTimeout(() => {
              setSuccess("");
            }, 3000);
          });
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className="text-center">
      <h1 className=" text-2xl font-bold my-6">새로운 상품 등록</h1>
      {success && <p className="my-2">✅ {success}</p>}
      <div className="flex justify-center items-center">
        {!file && (
          <div className="flex justify-center items-center w-96 h-[30rem] border-2 text-5xl rounded-xl">
            <AiOutlineFileImage color="#9f9f9f" />
          </div>
        )}
        {file && (
          <img
            className="w-96 h-[30rem] rounded-xl"
            src={URL.createObjectURL(file)}
            alt="상품 이미지"
          />
        )}
        <form className="flex flex-col px-14" onSubmit={handleSubmit}>
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
            placeholder="상품명"
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
            placeholder="상품 설명"
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
          <button
            className="mt-2 py-5 bg-brand text-white font-bold rounded-md"
            disabled={isUploading}
          >
            {isUploading ? "업로드중..." : "상품 등록하기"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewProduct;
