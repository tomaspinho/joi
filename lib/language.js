'use strict';

// Load modules


// Declare internals

const internals = {};


exports.errors = {
    root: 'value',
    key: '"{{!key}}" ',
    messages: {
        wrapArrays: true
    },
    any: {
        unknown: 'não é permitido',
        invalid: 'contém um valor inválido',
        empty: 'não pode ser vazio',
        required: 'é requerido',
        allowOnly: 'tem de ser um de {{valids}}',
        default: 'disparou um erro ao correr o método padrão'
    },
    alternatives: {
        base: 'não é uma das alternativas permitidas',
        child: null
    },
    array: {
        base: 'tem de ser um vector',
        includes: 'a posição {{pos}} não tem um dos tipos permitidos',
        includesSingle: 'valor único de "{{!key}}" não tem nenhum dos tipos permitidos',
        includesOne: 'a posição {{pos}} falha porque {{reason}}',
        includesOneSingle: 'valor único de "{{!key}}" falha porque {{reason}}',
        includesRequiredUnknowns: 'não contém {{unknownMisses}} os valores requeridos',
        includesRequiredKnowns: 'não contém {{knownMisses}}',
        includesRequiredBoth: 'não contém {{knownMisses}} e {{unknownMisses}} outros valores requeridos',
        excludes: 'a posição {{pos}} contém um valor excluído',
        excludesSingle: 'valor único de "{{!key}}" contém um valor excluído',
        min: 'tem de conter pelo menos {{limit}} itens',
        max: 'tem de conter exactamente ou menos de {{limit}} itens',
        length: 'tem de conter {{limit}} itens',
        ordered: 'a posição {{pos}} falha porque {{reason}}',
        orderedLength: 'a posição {{pos}} falha porque o vector tem de conter até {{limit}} itens',
        sparse: 'não pode ser um vector esparso',
        unique: 'a posição {{pos}} contém um valor duplicado'
    },
    boolean: {
        base: 'tem de ser um valor booleano'
    },
    binary: {
        base: 'tem de ser um buffer ou uma string',
        min: 'tem de ocupar menos de {{limit}} bytes',
        max: 'tem de ocupar menos ou exactamente {{limit}} bytes',
        length: 'tem de ocupar {{limit}} bytes'
    },
    date: {
        base: 'tem de ser um número inteiro de milisegundos ou uma data válida',
        format: 'tem de ser uma string com o seguinte formato {{format}}',
        strict: 'tem de ser uma data válida',
        min: 'tem de ser igual ou posterior a "{{limit}}"',
        max: 'tem de ser anterior ou igual a "{{limit}}"',
        isoDate: 'tem de ser uma data válida ISO 8601',
        timestamp: {
            javascript: 'tem de ser uma timestamp válida ou um número inteiro de milisegundos',
            unix: 'tem de ser uma timestamp válida ou um número inteiro de segundos'
        },
        ref: 'referencia "{{ref}}" que não é uma data'
    },
    function: {
        base: 'tem de ser uma função',
        arity: 'tem de ter uma aridade de {{n}}',
        minArity: 'tem de ter uma aridade igual ou superior a {{n}}',
        maxArity: 'tem de ter uma aridade igual ou inferior a {{n}}',
        ref: 'tem de ser uma referência Joi'
    },
    lazy: {
        base: '!!schema erro: o lazy schema tem de estar definido',
        schema: '!!schema erro: a função lazy schema tem de retornar um schema'
    },
    object: {
        base: 'tem de ser um objecto',
        child: '!!child "{{!child}}" falha porque {{reason}}',
        min: 'tem de ter pelo menos {{limit}} filhos',
        max: 'tem de ter exactamente ou menos de {{limit}} filhos',
        length: 'tem de ter  {{limit}} filhos',
        allowUnknown: '!!"{{!child}}" não é permitido',
        with: '!!"{{mainWithLabel}}" falta o par "{{peerWithLabel}}"',
        without: '!!"{{mainWithLabel}}" tem um conflicto com o par proibido "{{peerWithLabel}}"',
        missing: 'tem de conter pelo menos um de {{peersWithLabels}}',
        xor: 'contém um conflicto entre pares proíbidos {{peersWithLabels}}',
        or: 'tem de conter pelo menos um de {{peersWithLabels}}',
        and: 'contém {{presentWithLabels}} sem os pares requeridos {{missingWithLabels}}',
        nand: '!!"{{mainWithLabel}}" não pode coexistir com {{peersWithLabels}}',
        assert: '!!"{{ref}}" validação falhou porque "{{ref}}" falhou a {{message}}',
        rename: {
            multiple: 'impossível renomear filho "{{from}}" porque renomações múltiplas estão desabilitadas e outra chave já foi renomeada de "{{to}}"',
            override: 'impossível renomear filho "{{from}}" porque as substituições foram desabilitadas e o destino "{{to}}" existe'
        },
        type: 'tem de ser uma instância de "{{type}}"',
        schema: 'tem de ser uma instância Joi'
    },
    number: {
        base: 'tem de ser um número',
        min: 'tem de ser igual ou maior que {{limit}}',
        max: 'tem de ser igual ou menor que {{limit}}',
        less: 'tem de ser menor que {{limit}}',
        greater: 'tem de ser maior que {{limit}}',
        float: 'tem de ser um float ou um double',
        integer: 'tem de ser um inteiro',
        negative: 'tem de ser um número negativo',
        positive: 'tem de ser um número positivo',
        precision: 'não pode ter mais que {{limit}} casas decimais',
        ref: 'referencia "{{ref}}" que não é um número',
        multiple: 'tem de ser um múltiplo de {{multiple}}'
    },
    string: {
        base: 'tem de ser uma string',
        min: 'tem de ter pelo menos {{limit}} caracteres',
        max: 'tem de ter exactamente ou menos de {{limit}} caracteres',
        length: 'tem de ser {{limit}} caracteres',
        alphanum: 'só pode conter caracteres alfanuméricos',
        token: 'só pode conter caracteres alfanuméricos ou underscores',
        regex: {
            base: 'com valor "{{!value}}" não obedece ao padrão requerido: {{pattern}}',
            name: 'com valor "{{!value}}" não obedece ao padrão requerido {{name}}',
            invert: {
                base: 'com valor "{{!value}}" obedece ao padrão invertido: {{pattern}}',
                name: 'com valor "{{!value}}" obedece ao padrão invertido {{name}}'
            }
        },
        email: 'tem de ser um e-mail válido',
        uri: 'tem de ser uma url válida',
        uriRelativeOnly: 'tem de ser uma url relativa válida',
        uriCustomScheme: 'tem de ser uma url válida com o esquema correspondente ao padrão {{scheme}}',
        isoDate: 'tem de ser uma data ISO 8601 válida',
        guid: 'tem de ser um Guido válido',
        hex: 'só pode conter caracteres hexadecimais',
        base64: 'tem de ser uma string em base64',
        hostname: 'tem de ser um hostname válido',
        lowercase: 'só pode conter caracteres minúsculos',
        uppercase: 'só pode conter caracteres maiúsculos',
        trim: 'não pode conter espaço em branco à frente ou atrás',
        creditCard: 'tem de ser um cartão de crédito',
        ref: 'referencia "{{ref}}" que não é um número',
        ip: 'tem de ser um IP válido com CIDR {{cidr}}',
        ipVersion: 'tem de ser um IP válido com uma das seguintes versões {{version}} com CIDR {{cidr}}'
    }
};
