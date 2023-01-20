import Book from "../model/books.js";
const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "could not fetch the documents" });
  }
};
const addBook = async (req, res) => {
  console.log(req.body);
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    genres: req.body.genres,
    rating: req.body.rating,
  });
  try {
    const NewBook = await book.save();
    res.status(201).json(NewBook);
  } catch (e) {
    res.status(400);
  }
};
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (e) {
    res.status(404).json({ error: "book not find" });
  }
};
const deleteBook = async (req,res) =>
{
  try{
    const Deletebook = await Book.deleteOne({_id:req.params.id})
    res.json(Deletebook);
  }catch(e)
  {
    res.status(404).json({error : "delete book not find "})
  }
}
const UpdateBook = async (req,res) =>
{
  try{
    const book = await Book.findById(req.params.id);
    Object.assign(book,req.body)
    book.save();
    res.status(200).json({data : book});
  }
  catch(e)
  {
    res.status(404).json("update book not find");
  }
}
export default { getAllBooks, addBook, getBookById,deleteBook,UpdateBook };
