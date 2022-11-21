const addProdutoTela = (prod) => {
    const tr = $('<tr>')
    tr.append($('<td>').text(prod.descricao))
    tr.append($('<td>').text(prod.quant))
    $('#table1').append(tr)
    return false
}

const addProdutoCarrinho = async () => {
    const prod = { 
        'descricao': $('#descricao').val(),
        'quant': $('#quant').val()
    }
    console.log(prod)

    try {
        await fetch('/carrinho', {
            method: 'post', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prod)
        })

        addProdutoTela(prod)
    }catch(error) {
        $('#message').html('Erro ao tentar adicionar o produto ao carrinho')
        console.error(error)
    }
}

$(async () => {
    $("#form1").submit(async e => {
        e.preventDefault()
        await addProdutoCarrinho()
    })
})