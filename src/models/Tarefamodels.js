var idTarefa = 0;

class Tarefa{
    constructor(titulo, descricao, status, datadecriacao){
        this.id = idTarefa++;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
        this.datadecriacao = datadecriacao;
    }
}
module.exports = Tarefa;
