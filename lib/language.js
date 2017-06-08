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
        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
        includesOne: 'at position {{pos}} fails because {{reason}}',
        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
        includesRequiredKnowns: 'does not contain {{knownMisses}}',
        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
        excludes: 'at position {{pos}} contains an excluded value',
        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
        min: 'must contain at least {{limit}} items',
        max: 'must contain less than or equal to {{limit}} items',
        length: 'must contain {{limit}} items',
        ordered: 'at position {{pos}} fails because {{reason}}',
        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
        sparse: 'must not be a sparse array',
        unique: 'position {{pos}} contains a duplicate value'
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
        base: '!!schema error: lazy schema must be set',
        schema: '!!schema error: lazy schema function must return a schema'
    },
    object: {
        base: 'must be an object',
        child: '!!child "{{!child}}" fails because {{reason}}',
        min: 'must have at least {{limit}} children',
        max: 'must have less than or equal to {{limit}} children',
        length: 'must have {{limit}} children',
        allowUnknown: '!!"{{!child}}" is not allowed',
        with: '!!"{{mainWithLabel}}" missing required peer "{{peerWithLabel}}"',
        without: '!!"{{mainWithLabel}}" conflict with forbidden peer "{{peerWithLabel}}"',
        missing: 'must contain at least one of {{peersWithLabels}}',
        xor: 'contains a conflict between exclusive peers {{peersWithLabels}}',
        or: 'must contain at least one of {{peersWithLabels}}',
        and: 'contains {{presentWithLabels}} without its required peers {{missingWithLabels}}',
        nand: '!!"{{mainWithLabel}}" must not exist simultaneously with {{peersWithLabels}}',
        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
        rename: {
            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
        },
        type: 'must be an instance of "{{type}}"',
        schema: 'must be a Joi instance'
    },
    number: {
        base: 'must be a number',
        min: 'must be larger than or equal to {{limit}}',
        max: 'must be less than or equal to {{limit}}',
        less: 'must be less than {{limit}}',
        greater: 'must be greater than {{limit}}',
        float: 'must be a float or double',
        integer: 'must be an integer',
        negative: 'must be a negative number',
        positive: 'must be a positive number',
        precision: 'must have no more than {{limit}} decimal places',
        ref: 'references "{{ref}}" which is not a number',
        multiple: 'must be a multiple of {{multiple}}'
    },
    string: {
        base: 'must be a string',
        min: 'length must be at least {{limit}} characters long',
        max: 'length must be less than or equal to {{limit}} characters long',
        length: 'length must be {{limit}} characters long',
        alphanum: 'must only contain alpha-numeric characters',
        token: 'must only contain alpha-numeric and underscore characters',
        regex: {
            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
            invert: {
                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
            }
        },
        email: 'must be a valid email',
        uri: 'must be a valid uri',
        uriRelativeOnly: 'must be a valid relative uri',
        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
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
