document.addEventListener('DOMContentLoaded', function() {
    const municipioSelect = document.getElementById('municipio');
    const unidadeSelect = document.getElementById('unidade');

    const unidadesPorMunicipio = {
        "alem_da_paraiba": ["Unidade de Coleta Além da Paraíba"],
        "belo_horizonte": ["Unidade de Coleta Hospital Júlia Kubitschek", "Hemocentro Belo Horizonte", "Unidade de Coleta - Estação BH"],
        "betim": ["Unidade de Coleta Betim"],
        "diamantina": ["Hemonúcleo Diamantina"],
        "divinopolis": ["Hemonúcleo Divinópolis"],
        "governador_valadares": ["Hemocentro Governador Valadares"],
        "ituiutaba": ["Hemonúcleo Ituiutaba"],
        "juiz_de_fora": ["Hemocentro Juiz de Fora"],
        "manhuacu": ["Hemonúcleo Manhuaçu"],
        "montes_claros": ["Hemocentro Montes Claros"],
        "passos": ["Hemonúcleo Passos"],
        "patos_de_minas": ["Hemonúcleo Patos de Minas"],
        "ponte_nova": ["Hemonúcleo Ponte Nova"],
        "pouso_alegre": ["Hemocentro Pouso Alegre"],
        "pocos_de_caldas": ["Unidade de Coleta Poços de Caldas"],
        "sete_lagoas": ["Hemonúcleo Sete Lagoas"],
        "sao_joao_del_rei": ["Hemonúcleo São João Del Rei"],
        "uberaba": ["Hemocentro Uberaba"],
        "uberlandia": ["Hemocentro Uberlândia"]
    };

    municipioSelect.addEventListener('change', function() {
        const selectedMunicipio = this.value;
        unidadeSelect.innerHTML = '<option value="">Inserir uma unidade</option>';

        if (selectedMunicipio && unidadesPorMunicipio[selectedMunicipio]) {
            unidadesPorMunicipio[selectedMunicipio].forEach(function(unidade) {
                const option = document.createElement('option');
                option.value = unidade.toLowerCase().replace(/\s+/g, '_');
                option.textContent = unidade;
                unidadeSelect.appendChild(option);
            });
        }
    });
});
