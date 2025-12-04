function status(request, response) {
  response.status(200).json({ teste: "Olá tudo bem? Quer açúcar?" });
}

export default status;
